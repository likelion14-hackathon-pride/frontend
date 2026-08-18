import { useState } from 'react';
import styled from 'styled-components';

import * as cardsApi from '../../../apis/cards';
import * as qnaApi from '../../../apis/qna';
import { CARD_COLUMN, URGENCY_LABEL, lookup } from '../../../apis/constants';
import { useAsync, useMutation } from '../../../hooks/useAsync';
import { formatDateTime } from '../../../utils/time';
import { ErrorState, InlineError, LoadingState } from '../../common/AsyncStates';
import { useMemberNavigation } from '../../../context/member/MemberContext';
import chatBubbleIcon from '../../../assets/icons/chat-org.svg';
import bookIcon from '../../../assets/icons/book-org.svg';

// Ready/In progress/Answered 에서만 쓰는 CTA. Waiting 은 버튼이 없고, Done 은 별도 DoneRow 로 그린다.
const CTA_LABEL = {
  [CARD_COLUMN.READY]: "I'll take this on",
  [CARD_COLUMN.IN_PROGRESS]: 'Mark as done',
  [CARD_COLUMN.ANSWERED]: 'Mark as done',
  DEFAULT: null,
};

const MOVE_HINT = {
  [CARD_COLUMN.READY]: 'Starting this will move it to In progress.',
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

const SourceLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
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
  background: #ff8a3d;
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

// Waiting: 대표에게 보낸(아직 답 없는) 질문. 버튼 없음 — 그냥 보여주기만.
const KickerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const KickerDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(props) => props.$color ?? '#8a8a93'};
`;

const KickerLabel = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #a0a0a8;
  letter-spacing: 0.08em;
`;

const MessageEn = styled.div`
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.3px;
  line-height: 1.35;
  margin-top: 9px;
`;

const MessageKo = styled.div`
  font-size: 13px;
  color: #8a8a93;
  margin-top: 7px;
  font-family: 'IBM Plex Mono', monospace;
  line-height: 1.6;
`;

const AnswerMeta = styled.div`
  font-size: 11.5px;
  color: #a0a0a8;
  margin-top: 6px;
`;

// Done: 초록 체크 + 같은 줄 우측에 Reopen
const DoneCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 1px 20px 0px #0000002e;
  padding: 16px 18px;
`;

const DoneRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const DoneCheck = styled.span`
  width: 22px;
  height: 22px;
  flex: none;
  border-radius: 7px;
  background: #3ba55c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DoneLabel = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 14.5px;
  font-weight: 800;
`;

const DoneButton = styled.button`
  flex: none;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 700;
  color: #6b6b73;
  border: 1px solid #eaeaee;
  padding: 8px 13px;
  border-radius: 10px;
  background: none;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 999px rgba(23, 23, 27, 0.045);
  }
`;

export default function TaskDetailPanel({ card, isWide, onToggleWide, onClose, onMoveAction }) {
  const { companyId, goToAskWithQuestion, reloadCards } = useMemberNavigation();
  const [askDraft, setAskDraft] = useState('');

  const cardId = card?.id ?? null;

  const detailQuery = useAsync(() => cardsApi.fetchCard(companyId, cardId), [companyId, cardId], {
    enabled: Boolean(companyId && cardId),
  });

  const acknowledge = useMutation((escalationId) =>
    qnaApi.acknowledgeEscalation(companyId, escalationId)
  );

  if (!card) return null;

  const detail = detailQuery.data;
  const columnId = card.columnId ?? card.column;
  const ctaLabel = lookup(CTA_LABEL, columnId);
  const moveHint = lookup(MOVE_HINT, columnId);

  const isReady = columnId === CARD_COLUMN.READY;
  const isInProgress = columnId === CARD_COLUMN.IN_PROGRESS;
  const isWaiting = columnId === CARD_COLUMN.WAITING;
  const isAnswered = columnId === CARD_COLUMN.ANSWERED;
  const isDone = columnId === CARD_COLUMN.DONE;

  // Done 카드가 어디서 왔는지는 서버가 previousColumn 으로 알려준다(추측 아님).
  const previousColumn = card.previousColumn ?? detail?.previousColumn;
  const doneFromAnswered = isDone && previousColumn === CARD_COLUMN.ANSWERED;

  function handleAskSend() {
    if (!askDraft.trim()) return;
    goToAskWithQuestion(askDraft.trim(), card.id);
  }

  async function handleAcknowledge(escalationId) {
    const result = await acknowledge.mutate(escalationId);
    if (result.ok) {
      detailQuery.reload();
      reloadCards();
    }
  }

  const relatedRules = detail?.relatedRules ?? [];
  const questions = detail?.questions ?? [];

  // 답이 없으면 "보낸 질문"(Waiting), 있으면 "답 온 질문"(Answered) — 같은 questions 배열을 상태로만 나눈다.
  const sentQuestions = questions.filter((q) => !(q.answerEn || q.answerKo));
  const answeredQuestions = questions.filter((q) => q.answerEn || q.answerKo);

  const showMainCard = isReady || isInProgress || isWaiting || (isDone && !doneFromAnswered);
  const showHandbookAndAsk = isInProgress; // Handbook rules / Ask SAI 는 In progress 에서만
  const showSentQuestions = isWaiting;
  const showAnsweredQuestions = isAnswered || (isDone && doneFromAnswered);

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
        {showMainCard && (
          <MainCard>
            <MainCardTop>
              <MainCardDot />
              <MainCardKicker>WHAT YOU NEED TO DO</MainCardKicker>
              <MainCardWhen>{lookup(URGENCY_LABEL, card.urgency)}</MainCardWhen>
            </MainCardTop>
            <MainCardBody>
              <Purpose>{card.purposeEn || card.purpose}</Purpose>
              {card.purposeEn && card.purpose && card.purposeEn !== card.purpose && (
                <PurposeKo>{card.purpose}</PurposeKo>
              )}
              <MetaRow>
                <DeliverableBox>
                  <MetaLabel>DELIVERABLE</MetaLabel>
                  <DeliverableValue>
                    {card.deliverableEn || card.deliverable || 'Not specified yet'}
                  </DeliverableValue>
                </DeliverableBox>
                <DueBox>
                  <DueLabel>DUE</DueLabel>
                  <DueValue>
                    {card.deadlineTextEn ||
                      card.deadlineText ||
                      formatDateTime(card.deadlineAt, { fallback: 'No deadline' })}
                  </DueValue>
                </DueBox>
              </MetaRow>
              {card.permalink && (
                <SourceLink href={card.permalink} target="_blank" rel="noreferrer">
                  Open source ↗
                </SourceLink>
              )}
            </MainCardBody>
          </MainCard>
        )}

        {showAnsweredQuestions &&
          answeredQuestions.map((question) => (
            <Card key={question.escalationId}>
              <KickerRow>
                <KickerDot $color="#3ba55c" />
                <KickerLabel>김대표 ANSWERED</KickerLabel>
              </KickerRow>
              <MessageEn>{question.answerEn || question.answerKo}</MessageEn>
              {question.answerEn &&
                question.answerKo &&
                question.answerEn !== question.answerKo && (
                  <MessageKo>{question.answerKo}</MessageKo>
                )}
              <AnswerMeta>
                Asked: {question.questionEn}
                {question.sentAt ? ` · Sent ${formatDateTime(question.sentAt, { fallback: '' })}` : ''}
              </AnswerMeta>
              {!question.acknowledgedAt && (
                <SmallButton
                  type="button"
                  disabled={acknowledge.pending}
                  onClick={() => handleAcknowledge(question.escalationId)}
                  style={{ marginTop: 10 }}
                >
                  Noted
                </SmallButton>
              )}
            </Card>
          ))}

        {showSentQuestions &&
          sentQuestions.map((question) => (
            <Card key={question.escalationId}>
              <KickerRow>
                <KickerDot $color="#ff8a3d" />
                <KickerLabel>SENT VIA SAI · AWAITING REPLY</KickerLabel>
              </KickerRow>
              <MessageEn>{question.questionEn}</MessageEn>
              <MessageKo>{question.draftKo}</MessageKo>
            </Card>
          ))}

        <InlineError error={acknowledge.error} />

        {detailQuery.loading && !detail && (
          <LoadingState compact label="Loading task details…" />
        )}
        {detailQuery.error && !detail && (
          <ErrorState error={detailQuery.error} onRetry={detailQuery.reload} compact />
        )}

        {detail && showHandbookAndAsk && relatedRules.length > 0 && (
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

        {detail && showHandbookAndAsk && (
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
        )}

        {isDone ? (
          <DoneCard>
            <DoneRow>
              <DoneCheck>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 10 10"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.9"
                >
                  <path d="M2 5.2l2 2L8 3" />
                </svg>
              </DoneCheck>
              <DoneLabel>Done</DoneLabel>
              <DoneButton onClick={onMoveAction}>Reopen</DoneButton>
            </DoneRow>
          </DoneCard>
        ) : (
          ctaLabel && (
            <StatusCard>
              <StatusLabel>TASK STATUS</StatusLabel>
              <StatusButton onClick={onMoveAction}>{ctaLabel}</StatusButton>
              {moveHint && <StatusHint>{moveHint}</StatusHint>}
            </StatusCard>
          )
        )}
      </Body>
    </Overlay>
  );
}
