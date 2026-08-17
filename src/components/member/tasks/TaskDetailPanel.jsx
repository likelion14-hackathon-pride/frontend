import { useState } from 'react';
import styled from 'styled-components';

import * as cardsApi from '../../../apis/cards';
import * as qnaApi from '../../../apis/qna';
import {
  CARD_COLUMN,
  ESCALATION_STATUS,
  RISK_LEVEL,
  URGENCY_LABEL,
  lookup,
} from '../../../apis/constants';
import { useAsync, useMutation } from '../../../hooks/useAsync';
import { formatDateTime } from '../../../utils/time';
import { ErrorState, InlineError, LoadingState } from '../../common/AsyncStates';
import { useMemberNavigation } from '../../../context/member/MemberContext';
import chatBubbleIcon from '../../../assets/icons/chat-org.svg';
import bookIcon from '../../../assets/icons/book-org.svg';

// 열마다 CTA 문구가 다르다. 옮길 수 있는 상태는 constants.ALLOWED_MOVES 가 정한다.
const CTA_LABEL = {
  [CARD_COLUMN.READY]: "I'll take this on",
  [CARD_COLUMN.IN_PROGRESS]: 'Mark as done',
  [CARD_COLUMN.ANSWERED]: 'Mark as done',
  [CARD_COLUMN.WAITING]: 'Keep working on it',
  [CARD_COLUMN.DONE]: 'Reopen',
  DEFAULT: null,
};

const MOVE_HINT = {
  [CARD_COLUMN.READY]: '시작하면 In progress 로 옮겨집니다.',
  [CARD_COLUMN.WAITING]: '대표의 답을 기다리는 중에도 다른 단계는 진행할 수 있습니다.',
  DEFAULT: null,
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
  width: ${(props) => (props.$wide ? '620px' : '420px')};
  max-width: 90%;
  display: flex;
  flex-direction: column;
  background: #f7f7f8;
  box-shadow: -12px 0 40px rgba(17, 17, 20, 0.12);
  transition: width 0.18s ease;
`;

const Header = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 20px;
  border-bottom: 1px solid #f2f2f4;
  background: #fff;
`;

const HeaderTitle = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 14.5px;
  font-weight: 800;
`;

const ExpandButton = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13.5px;
  font-weight: 700;
  color: #6b6b73;
  border: 1px solid #eaeaee;
  background: #fff;
  padding: 8px 14px;
  border-radius: 999px;
  cursor: pointer;

  &:hover {
    border-color: #d8d8de;
  }
`;

function ExpandIcon({ collapsed }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      style={{ transform: collapsed ? 'scaleX(-1)' : 'none' }}
    >
      <path
        d="M4 9.5L9.5 4M9.5 4H5.5M9.5 4V8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CloseButton = styled.button`
  flex: none;
  font-size: 16px;
  font-weight: 700;
  color: #8a8a93;
  background: none;
  border: none;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    color: #17171b;
  }
`;

const Body = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 18px 20px 26px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MainCard = styled.div`
  background: #ff6000;
  border-radius: 18px;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const MainCardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 16px 22px 0;
`;

const MainCardDot = styled.div`
  width: 7px;
  height: 7px;
  flex: none;
  border-radius: 50%;
  background: #fff;
`;

const MainCardKicker = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.88);
  letter-spacing: 0.08em;
`;

const MainCardWhen = styled.span`
  flex: none;
  white-space: nowrap;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.78);
`;

const MainCardBody = styled.div`
  padding: 12px 22px 22px;
`;

const Purpose = styled.div`
  font-size: 23px;
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.3;
  color: #fff;
`;

const PurposeKo = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.82);
  margin-top: 8px;
  line-height: 1.6;
  font-family: 'IBM Plex Mono', monospace;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const DeliverableBox = styled.div`
  flex: 1;
  min-width: 150px;
  background: rgba(255, 255, 255, 0.16);
  border-radius: 11px;
  padding: 12px 14px;
`;

const MetaLabel = styled.div`
  font-size: 11.5px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.82);
  letter-spacing: 0.06em;
`;

const DeliverableValue = styled.div`
  font-size: 14.5px;
  font-weight: 700;
  margin-top: 4px;
  line-height: 1.45;
  color: #fff;
`;

const DueBox = styled.div`
  flex: none;
  background: #fff;
  border-radius: 11px;
  padding: 12px 14px;
`;

const DueLabel = styled.div`
  font-size: 11.5px;
  font-weight: 700;
  color: #c97a22;
  letter-spacing: 0.06em;
`;

const DueValue = styled.div`
  font-size: 14.5px;
  font-weight: 700;
  margin-top: 4px;
  color: #b4600d;
  white-space: nowrap;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow:
    0px 1px 20px 0px #0000002e,
    0 1px 0 rgba(255, 96, 0, 0.04);
  padding: 18px 20px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const IconBadge = styled.span`
  flex: none;
  width: 26px;
  height: 26px;
  border-radius: 9px;
  background: #fff1e6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 14.5px;
  font-weight: 800;
`;

const Tag = styled.span`
  flex: none;
  white-space: nowrap;
  font-size: 11.5px;
  font-weight: 700;
  color: ${({ $tone }) => ($tone === 'danger' ? '#B03A3A' : '#C97A22')};
  background: ${({ $tone }) => ($tone === 'danger' ? '#FBEAEA' : '#FDF1E4')};
  padding: 3px 8px;
  border-radius: 6px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
`;

const ItemRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 11px;
  background: #fafafb;
  border: 1px solid #efeff1;
  padding: 12px 14px;
  border-radius: 11px;
`;

const ItemDot = styled.span`
  flex: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ $tone }) => ($tone === 'danger' ? '#DC2626' : '#FF8A3D')};
  margin-top: 8px;
`;

const ItemTextBlock = styled.span`
  flex: 1;
  min-width: 0;
  line-height: 1.45;
`;

const ItemTitle = styled.span`
  display: block;
  font-size: 14.5px;
  font-weight: 600;
  color: #17171b;
`;

const ItemSrc = styled.span`
  display: block;
  font-size: 12px;
  color: #a0a0a8;
  margin-top: 5px;
  font-family: 'IBM Plex Mono', monospace;
`;

const SmallButton = styled.button`
  flex: none;
  align-self: center;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background: #17171b;
  border: none;
  padding: 8px 12px;
  border-radius: 9px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const AnswerBlock = styled.div`
  margin-top: 8px;
  background: #f7f7f8;
  border-radius: 10px;
  padding: 11px 12px;
  font-size: 13.5px;
  line-height: 1.65;
  color: #3a3a42;
`;

const AnswerMeta = styled.div`
  font-size: 11.5px;
  color: #a0a0a8;
  margin-top: 6px;
`;

const AskInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`;

const AskInput = styled.input`
  flex: 1;
  min-width: 0;
  font-size: 14px;
  color: #17171b;
  background: #fafafb;
  border: 1px solid #efeff1;
  padding: 11px 14px;
  border-radius: 11px;
  outline: none;

  &:focus {
    border-color: #dddbd9;
    box-shadow: 0 0 0 3px rgba(213, 213, 213, 0.12);
  }
`;

const AskButton = styled.button`
  flex: none;
  white-space: nowrap;
  background: #17171b;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 11px 16px;
  border-radius: 11px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.88;
  }
`;

const StatusCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 1px 20px 0px #0000002e;
  padding: 16px 18px;
`;

const StatusLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #b4b4bc;
  letter-spacing: 0.09em;
`;

const StatusButton = styled.button`
  width: 100%;
  margin-top: 11px;
  background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
  color: #fff;
  font-size: 14.5px;
  font-weight: 700;
  padding: 12px;
  border-radius: 11px;
  border: none;
  cursor: pointer;
  box-shadow:
    0 6px 16px rgba(255, 96, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
`;

const StatusHint = styled.div`
  font-size: 12.5px;
  color: #a0a0a8;
  line-height: 1.6;
  margin-top: 9px;
`;

const SourceLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  font-size: 12px;
  color: #6b6b73;
`;

export default function TaskDetailPanel({ card, isWide, onToggleWide, onClose, onMoveAction }) {
  const { companyId, goToAskWithQuestion, reloadCards } = useMemberNavigation();
  const [askDraft, setAskDraft] = useState('');

  const cardId = card?.id ?? null;

  // 상세는 목록에 없는 것(수행 단계·미정 항목·근거 규칙·위험 경고)을 담고 있다.
  // 여는 순간 서버가 읽음으로 표시한다.
  const detailQuery = useAsync(
    () => cardsApi.fetchCard(companyId, cardId),
    [companyId, cardId],
    { enabled: Boolean(companyId && cardId) }
  );

  const escalate = useMutation((blankId) =>
    qnaApi.createEscalation(companyId, { blankId })
  );
  const acknowledge = useMutation((escalationId) =>
    qnaApi.acknowledgeEscalation(companyId, escalationId)
  );

  if (!card) return null;

  const detail = detailQuery.data;
  const columnId = card.columnId ?? card.column;
  const ctaLabel = lookup(CTA_LABEL, columnId);
  const moveHint = lookup(MOVE_HINT, columnId);

  function handleAskSend() {
    if (!askDraft.trim()) return;
    goToAskWithQuestion(askDraft.trim(), card.id);
  }

  async function handleEscalate(blankId) {
    const result = await escalate.mutate(blankId);
    if (result.ok) {
      detailQuery.reload();
      reloadCards();
    }
  }

  async function handleAcknowledge(escalationId) {
    const result = await acknowledge.mutate(escalationId);
    if (result.ok) {
      detailQuery.reload();
      reloadCards();
    }
  }

  const steps = detail?.steps ?? [];
  const blanks = detail?.blanks ?? [];
  const relatedRules = detail?.relatedRules ?? [];
  const riskWarnings = detail?.riskWarnings ?? [];
  const questions = detail?.questions ?? [];

  return (
    <Overlay $wide={isWide}>
      <Header>
        <HeaderTitle>Task detail</HeaderTitle>
        <ExpandButton onClick={onToggleWide}>
          <ExpandIcon collapsed={isWide} />
          {isWide ? 'Collapse' : 'Expand'}
        </ExpandButton>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Header>

      <Body>
        <MainCard>
          <MainCardTop>
            <MainCardDot />
            <MainCardKicker>WHAT YOU NEED TO DO</MainCardKicker>
            <MainCardWhen>{lookup(URGENCY_LABEL, card.urgency)}</MainCardWhen>
          </MainCardTop>
          <MainCardBody>
            <Purpose>{card.purposeEn || card.purpose}</Purpose>
            {/* 영어가 본문이고 한국어는 대조용이다(cards/models.py 주석). */}
            {card.purposeEn && card.purpose && card.purposeEn !== card.purpose && (
              <PurposeKo>{card.purpose}</PurposeKo>
            )}
            <MetaRow>
              <DeliverableBox>
                <MetaLabel>DELIVERABLE</MetaLabel>
                <DeliverableValue>
                  {card.deliverableEn || card.deliverable || '따로 정해지지 않았습니다'}
                </DeliverableValue>
              </DeliverableBox>
              <DueBox>
                <DueLabel>DUE</DueLabel>
                <DueValue>
                  {card.deadlineTextEn ||
                    card.deadlineText ||
                    formatDateTime(card.deadlineAt, { fallback: '기한 없음' })}
                </DueValue>
              </DueBox>
            </MetaRow>
            {card.permalink && (
              <SourceLink href={card.permalink} target="_blank" rel="noreferrer">
                원문 열기 ↗
              </SourceLink>
            )}
          </MainCardBody>
        </MainCard>

        <InlineError error={escalate.error || acknowledge.error} />

        {detailQuery.loading && !detail && <LoadingState compact label="카드 상세를 불러오는 중…" />}
        {detailQuery.error && !detail && (
          <ErrorState error={detailQuery.error} onRetry={detailQuery.reload} compact />
        )}

        {detail && (
          <>
            {riskWarnings.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>대표가 등록한 위험 작업</CardTitle>
                  <Tag $tone="danger">{riskWarnings.length}</Tag>
                </CardHeader>
                <List>
                  {riskWarnings.map((warning) => (
                    <ItemRow key={`${warning.keyword}-${warning.level}`}>
                      <ItemDot $tone="danger" />
                      <ItemTextBlock>
                        <ItemTitle>{warning.keyword}</ItemTitle>
                        <ItemSrc>
                          {warning.level === RISK_LEVEL.DANGER ? '위험' : '주의'} ·{' '}
                          {warning.note || '대표님께 먼저 확인하세요'}
                        </ItemSrc>
                      </ItemTextBlock>
                    </ItemRow>
                  ))}
                </List>
              </Card>
            )}

            {steps.length > 0 && (
              <Card>
                <CardHeader>
                  <IconBadge>
                    <img src={bookIcon} alt="" width={15} height={15} />
                  </IconBadge>
                  <CardTitle>How to do it</CardTitle>
                </CardHeader>
                <List>
                  {steps.map((step) => (
                    <ItemRow key={step.id}>
                      <ItemDot />
                      <ItemTextBlock>
                        <ItemTitle>{step.textEn || step.text}</ItemTitle>
                        {/* entryId 가 있으면 그 규칙이 근거다. 없으면 근거가 없다는 뜻. */}
                        <ItemSrc>
                          {step.entryId ? `근거 · ${step.entryTitle}` : '근거로 삼을 규칙 없음'}
                        </ItemSrc>
                      </ItemTextBlock>
                    </ItemRow>
                  ))}
                </List>
              </Card>
            )}

            {blanks.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>확인이 필요한 것</CardTitle>
                  <Tag>{blanks.filter((blank) => blank.needsOwner).length} 대기</Tag>
                </CardHeader>
                <List>
                  {blanks.map((blank) => (
                    <ItemRow key={blank.id}>
                      <ItemDot $tone={blank.needsOwner ? 'danger' : 'default'} />
                      <ItemTextBlock>
                        <ItemTitle>{blank.questionEn}</ItemTitle>
                        {blank.answeredBy ? (
                          <>
                            <AnswerBlock>{blank.saiAnswerEn || blank.saiAnswerKo}</AnswerBlock>
                            <AnswerMeta>
                              {blank.answeredBy === 'SAI'
                                ? 'SAI 가 핸드북에서 찾은 답'
                                : '대표가 준 답'}
                            </AnswerMeta>
                          </>
                        ) : (
                          <ItemSrc>
                            {blank.escalationId
                              ? '대표에게 물어봤습니다. 답을 기다리는 중입니다.'
                              : '아직 아무도 답하지 않았습니다.'}
                          </ItemSrc>
                        )}
                      </ItemTextBlock>
                      {blank.needsOwner && !blank.escalationId && (
                        <SmallButton
                          type="button"
                          disabled={escalate.pending}
                          onClick={() => handleEscalate(blank.id)}
                        >
                          대표에게 묻기
                        </SmallButton>
                      )}
                    </ItemRow>
                  ))}
                </List>
              </Card>
            )}

            {questions.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>대표에게 보낸 질문</CardTitle>
                </CardHeader>
                <List>
                  {questions.map((question) => (
                    <ItemRow key={question.escalationId}>
                      <ItemDot />
                      <ItemTextBlock>
                        <ItemTitle>{question.questionEn}</ItemTitle>
                        <ItemSrc>{question.draftKo}</ItemSrc>
                        {question.answerEn || question.answerKo ? (
                          <AnswerBlock>{question.answerEn || question.answerKo}</AnswerBlock>
                        ) : null}
                        <AnswerMeta>
                          {question.status}
                          {question.sentAt
                            ? ` · 보냄 ${formatDateTime(question.sentAt, { fallback: '' })}`
                            : ''}
                        </AnswerMeta>
                      </ItemTextBlock>
                      {/* 답을 읽었다고 표시해야 카드가 Answered 열에서 빠진다. */}
                      {question.status === ESCALATION_STATUS.ANSWERED &&
                        !question.acknowledgedAt && (
                          <SmallButton
                            type="button"
                            disabled={acknowledge.pending}
                            onClick={() => handleAcknowledge(question.escalationId)}
                          >
                            확인함
                          </SmallButton>
                        )}
                    </ItemRow>
                  ))}
                </List>
              </Card>
            )}

            {relatedRules.length > 0 && (
              <Card>
                <CardHeader>
                  <IconBadge>
                    <img src={bookIcon} alt="" width={15} height={15} />
                  </IconBadge>
                  <CardTitle>Handbook rules for this task</CardTitle>
                </CardHeader>
                <List>
                  {relatedRules.map((rule) => (
                    <ItemRow key={rule.entryId}>
                      <ItemDot />
                      <ItemTextBlock>
                        <ItemTitle>{rule.title}</ItemTitle>
                        <ItemSrc>
                          {[rule.scopeName, rule.source?.label].filter(Boolean).join(' · ')}
                        </ItemSrc>
                      </ItemTextBlock>
                    </ItemRow>
                  ))}
                </List>
              </Card>
            )}

            <Card>
              <CardHeader>
                <IconBadge>
                  <img src={chatBubbleIcon} alt="" width={15} height={15} />
                </IconBadge>
                <CardTitle>Unclear? Ask SAI first.</CardTitle>
              </CardHeader>
              <AskInputRow>
                <AskInput
                  value={askDraft}
                  onChange={(e) => setAskDraft(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAskSend()}
                  placeholder="Ask something about this task…"
                />
                <AskButton onClick={handleAskSend}>Ask</AskButton>
              </AskInputRow>
            </Card>
          </>
        )}

        {ctaLabel && (
          <StatusCard>
            <StatusLabel>TASK STATUS</StatusLabel>
            <StatusButton onClick={onMoveAction}>{ctaLabel}</StatusButton>
            {moveHint && <StatusHint>{moveHint}</StatusHint>}
          </StatusCard>
        )}
      </Body>
    </Overlay>
  );
}
