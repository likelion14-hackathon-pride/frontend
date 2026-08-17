import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { lookup } from '../../../../apis/constants';
import { formatShortKo } from '../../../../utils/time';
import { ErrorState, LoadingState } from '../../../common/AsyncStates';

const Panel = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 320px;
  min-width: 0;
  min-height: 388.823px;
  flex-direction: column;
  padding: 24px 20.667px;
  gap: 16px;
  border-radius: 22px;
  border: 0.667px solid #efeff1;
  background: #fff;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
`;

const HeaderRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  padding: 5.667px 14px 5.333px 11px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 121%;
  white-space: nowrap;
`;

const ProjectText = styled.span`
  color: #3c3c44;
  font-family: 'IBM Plex Mono';
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 133%;
  white-space: nowrap;
`;

const RelativeTime = styled.span`
  flex-shrink: 0;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 10.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 121%;
`;

const MessageRow = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
`;

const AvatarPill = styled.span`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background: #dde7fd;
`;

const AvatarLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #1d4ed8;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 127%;
  white-space: nowrap;
`;

const OwnerAvatar = styled.span`
  display: flex;
  height: 28px;
  width: 28px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50px;
  background: #17171b;
  color: #fff;
  font-family: 'Plus Jakarta Sans';
  font-size: 10px;
  font-weight: 700;
  line-height: 127%;
`;

const Bubble = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  max-width: 100%;
  min-width: 0;
  padding: 12px 18px 12px 14px;
  align-items: center;
  border-radius: ${({ $reverse }) => ($reverse ? '14px 4px 14px 14px' : '4px 14px 14px 14px')};
  background: ${({ $reverse }) => ($reverse ? '#17171B' : '#FAFAFB')};
`;

const BubbleText = styled.p`
  margin: 0;
  color: ${({ $reverse }) => ($reverse ? '#FFFFFF' : '#3A3A42')};
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const SuggestionBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
  padding: 14px 16px;
  border-radius: 16px;
  border: 0.667px dashed #d8d8de;
  background: #fafafb;
`;

const SuggestionHeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SuggestionLabel = styled.span`
  color: #2563eb;
  font-family: 'Plus Jakarta Sans';
  font-size: 9.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

const ProjectTag = styled.span`
  display: flex;
  height: 21.333px;
  padding: 4px 12px 4.333px 9px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background: #eef3ff;
  color: #1d4ed8;
  font-family: 'Plus Jakarta Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 127%;
`;

const SuggestionTitle = styled.p`
  margin: 0;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 14.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 20.3px;
  letter-spacing: -0.3px;
`;

const SuggestionEn = styled.p`
  margin: 0;
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
`;

const SuggestionSource = styled.span`
  color: #a0a0a8;
  font-family: 'IBM Plex Mono';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 133%;
`;

const EditTextarea = styled.textarea`
  resize: none;
  min-height: 60px;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #dbe4fc;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

const ScopeSelect = styled.select`
  width: 100%;
  padding: 9px 12px;
  border-radius: 10px;
  border: 1px solid #dbe4fc;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

const ThreadLinkButton = styled.a`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 40.667px;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  border-radius: 12px;
  text-decoration: none;
  background: ${({ $disabled }) => ($disabled ? '#F4F4F6' : '#2563EB')};
  color: ${({ $disabled }) => ($disabled ? '#A0A0A8' : '#FFFFFF')};
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-weight: 700;
  line-height: 123%;

  &:hover {
    background: ${({ $disabled }) => ($disabled ? '#F4F4F6' : '#1D4ED8')};
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  margin-top: auto;
`;

const ApproveButton = styled.button`
  display: flex;
  flex: 1 0 0;
  height: 40.667px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: ${({ disabled }) => (disabled ? '#DBE4FC' : '#2563EB')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: #fff;
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%;
`;

const GhostButton = styled.button`
  display: flex;
  height: 40.667px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: #f4f4f6;
  cursor: pointer;
  color: ${({ $muted }) => ($muted ? '#A0A0A8' : '#3C3C44')};
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 123%;
  white-space: nowrap;
`;





const StatusBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 16px;
  border-radius: 14px;
  background: #eaf6ef;
`;

const StatusBannerTitle = styled.span`
  color: #1f7a45;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-weight: 700;
`;

const StatusBannerHint = styled.span`
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 11px;
`;

const SavingBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  border-radius: 14px;
  background: #f4f4f6;
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  font-weight: 700;
`;

const EmptyPanel = styled.div`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;
  color: #a0a0a8;
  font-family: 'Plus Jakarta Sans';
  font-size: 12.5px;
  text-align: center;
`;

const STATUS_META = {
  waiting: { label: '답변 대기', bg: '#FFF6E8', color: '#9A6212' },
  pending_approval: { label: '승인 대기', bg: '#EEF3FF', color: '#1D4ED8' },
  saved: { label: '저장됨', bg: '#EAF6EF', color: '#1F7A45' },
  discarded: { label: '저장 안 함', bg: '#F4F4F6', color: '#6B6B73' },
  DEFAULT: { label: '알 수 없음', bg: '#F4F4F6', color: '#6B6B73' },
};

// 대표는 슬랙 스레드에 답장한다. 대시보드에서 직접 답을 입력하는 API 는 없다.
function QuestionApprovalPanel({
  question,
  detail,
  detailLoading,
  detailError,
  onRetryDetail,
  scopes = [],
  pending = false,
  threadUrl,
  onOpenThread,
  onApprove,
  onDismiss,
}) {
  const [mode, setMode] = useState('view');
  const [draftTitle, setDraftTitle] = useState('');
  const [draftRule, setDraftRule] = useState('');
  const [draftScopeId, setDraftScopeId] = useState('');

  useEffect(() => {
    setMode('view');
  }, [question?.id]);

  if (!question) {
    return (
      <Panel>
        <EmptyPanel>왼쪽에서 질문을 선택하면 상세 내용이 표시됩니다</EmptyPanel>
      </Panel>
    );
  }

  const meta = lookup(STATUS_META, question.status);
  const proposal = detail?.proposal ?? null;

  const startEdit = () => {
    setDraftTitle(proposal?.title ?? '');
    setDraftRule(proposal?.bodyEn ?? '');
    setDraftScopeId(proposal?.scopeId ?? '');
    setMode('editing');
  };

  const handleApprove = () => onApprove({});

  const handleEditSave = () =>
    onApprove({
      ...(draftTitle.trim() ? { title: draftTitle.trim() } : {}),
      ...(draftRule.trim() ? { ruleEn: draftRule.trim() } : {}),
      ...(draftScopeId ? { scopeId: Number(draftScopeId) } : {}),
    });

  return (
    <Panel>
      <HeaderRow>
        <HeaderLeft>
          <StatusBadge $bg={meta.bg} $color={meta.color}>
            {meta.label}
          </StatusBadge>
          <ProjectText>{question.project}</ProjectText>
        </HeaderLeft>
        {question.relativeTime && <RelativeTime>{question.relativeTime}</RelativeTime>}
      </HeaderRow>

      <MessageRow>
        <AvatarPill>
          <AvatarLabel>{question.employee}</AvatarLabel>
        </AvatarPill>
        <Bubble>
          <BubbleText>{question.text}</BubbleText>
        </Bubble>
      </MessageRow>

      {question.ownerReply && (
        <MessageRow $reverse>
          <OwnerAvatar>답</OwnerAvatar>
          <Bubble $reverse>
            <BubbleText $reverse>{question.ownerReply}</BubbleText>
          </Bubble>
        </MessageRow>
      )}

      {question.status === 'waiting' && (
        <>
          <StatusBanner style={{ background: '#FFF6E8' }}>
            <StatusBannerTitle style={{ color: '#9A6212' }}>
              {question.serverStatus === 'DRAFT'
                ? '팀원이 아직 슬랙으로 보내지 않았습니다.'
                : '슬랙 스레드에 답장해 주세요.'}
            </StatusBannerTitle>
            <StatusBannerHint>
              {question.declined
                ? `직전 답장은 답으로 보지 않았습니다 · ${question.answerReason ?? ''}`
                : '답장하고 이 화면으로 돌아오면 SAI가 답을 가져와 정리합니다.'}
            </StatusBannerHint>
          </StatusBanner>

          {/* 보내기 전에는 스레드가 없어 열 곳이 없다. */}
          {threadUrl ? (
            <ThreadLinkButton
              href={threadUrl}
              target="_blank"
              rel="noreferrer"
              onClick={onOpenThread}
            >
              슬랙 스레드에서 답하기 ↗
            </ThreadLinkButton>
          ) : (
            <ThreadLinkButton as="span" $disabled>
              {question.serverStatus === 'DRAFT'
                ? '아직 보내지 않은 질문입니다'
                : '슬랙 스레드를 찾을 수 없습니다'}
            </ThreadLinkButton>
          )}
        </>
      )}

      {question.status === 'saved' && (
        <StatusBanner>
          <StatusBannerTitle>핸드북에 저장되었습니다.</StatusBannerTitle>
          <StatusBannerHint>
            초안으로 들어갔습니다. 핸드북 탭의 확인 보관함에서 확정하면 SAI가 바로 답합니다.
          </StatusBannerHint>
        </StatusBanner>
      )}

      {question.status === 'discarded' && (
        <StatusBanner style={{ background: '#F4F4F6' }}>
          <StatusBannerTitle style={{ color: '#6B6B73' }}>저장하지 않았습니다.</StatusBannerTitle>
          <StatusBannerHint>답변은 남았지만 핸드북에는 반영되지 않습니다.</StatusBannerHint>
        </StatusBanner>
      )}

      {question.status === 'pending_approval' && (
        <>
          {detailLoading && !proposal && <LoadingState compact label="저장 제안을 만드는 중…" />}
          {detailError && !proposal && (
            <ErrorState error={detailError} onRetry={onRetryDetail} compact />
          )}

          {proposal && (
            <>
              <SuggestionBox>
                <SuggestionHeadRow>
                  <SuggestionLabel>저장 제안 · 항목 1개</SuggestionLabel>
                  <ProjectTag>{proposal.scopeName ?? '공통 규칙'}</ProjectTag>
                </SuggestionHeadRow>
                {mode === 'editing' ? (
                  <>
                    <EditTextarea
                      autoFocus
                      value={draftTitle}
                      placeholder="규칙 제목"
                      onChange={(e) => setDraftTitle(e.target.value)}
                    />
                    <EditTextarea
                      value={draftRule}
                      placeholder="팀원에게 보이는 영어 문장 (비워 두면 서버가 만든 값을 씁니다)"
                      onChange={(e) => setDraftRule(e.target.value)}
                    />
                    <ScopeSelect
                      value={draftScopeId}
                      onChange={(e) => setDraftScopeId(e.target.value)}
                    >
                      <option value="">{proposal.scopeName ?? '기본 지식공간'}</option>
                      {scopes.map((scope) => (
                        <option key={scope.id} value={scope.id}>
                          {scope.name}
                        </option>
                      ))}
                    </ScopeSelect>
                  </>
                ) : (
                  <SuggestionTitle>{proposal.title}</SuggestionTitle>
                )}
                <SuggestionEn>{proposal.bodyEn || proposal.bodyKo}</SuggestionEn>
                <SuggestionSource>
                  출처 {proposal.sourceLabel ?? '대표 확인 답변'}
                  {proposal.answeredAt ? ` · ${formatShortKo(proposal.answeredAt)}` : ''}
                </SuggestionSource>
              </SuggestionBox>

              {pending ? (
                <SavingBanner>처리 중…</SavingBanner>
              ) : mode === 'editing' ? (
                <ButtonsRow>
                  <ApproveButton type="button" onClick={handleEditSave}>
                    수정 후 저장
                  </ApproveButton>
                  <GhostButton type="button" onClick={() => setMode('view')}>
                    되돌리기
                  </GhostButton>
                </ButtonsRow>
              ) : (
                <ButtonsRow>
                  <ApproveButton type="button" onClick={handleApprove}>
                    승인 후 저장
                  </ApproveButton>
                  <GhostButton type="button" onClick={startEdit}>
                    수정
                  </GhostButton>
                  <GhostButton type="button" $muted onClick={onDismiss}>
                    저장 안 함
                  </GhostButton>
                </ButtonsRow>
              )}
            </>
          )}
        </>
      )}
    </Panel>
  );
}

export default QuestionApprovalPanel;
