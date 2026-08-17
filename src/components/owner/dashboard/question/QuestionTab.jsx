import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import * as handbookApi from '../../../../apis/handbook';
import * as qnaApi from '../../../../apis/qna';
import * as sourcesApi from '../../../../apis/sources';
import { CONNECTION_KIND, SCOPE_KIND } from '../../../../apis/constants';
import { ErrorState, InlineError, LoadingState } from '../../../common/AsyncStates';
import { useAsync, useMutation } from '../../../../hooks/useAsync';
import { slackThreadUrl } from '../../../../utils/slack';
import QuestionStatCards from './QuestionStatCards';
import QuestionList from './QuestionList';
import QuestionApprovalPanel from './QuestionApprovalPanel';
import { toQuestionRow, UI_STATUS } from './questionData';

const TabContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 18px;
`;

const HeaderTextGroup = styled.div`
  display: inline-flex;
  padding-bottom: 1.333px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7.792px;
`;

const Heading = styled.h1`
  margin: 0;
  color: #17171b;
  font-family: 'Plus Jakarta Sans';
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 41.8px;
  letter-spacing: -1.2px;
`;

const Subheading = styled.p`
  margin: 0;
  color: #6b6b73;
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 123%;
`;

const SplitRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

function QuestionTab({ companyId }) {
  const [selectedId, setSelectedId] = useState(null);

  const listQuery = useAsync(
    () => qnaApi.fetchAllEscalations(companyId),
    [companyId],
    { enabled: Boolean(companyId) }
  );
  const scopesQuery = useAsync(
    () => handbookApi.fetchScopes(companyId),
    [companyId],
    { enabled: Boolean(companyId) }
  );

  const rows = useMemo(
    () => (listQuery.data ?? []).map(toQuestionRow),
    [listQuery.data]
  );

  const activeId = selectedId ?? rows[0]?.id ?? null;

  // 상세는 proposal(승인하면 어떤 규칙이 어디에 저장될지)을 함께 준다.
  const detailQuery = useAsync(
    () => qnaApi.fetchEscalation(companyId, activeId),
    [companyId, activeId],
    { enabled: Boolean(companyId && activeId) }
  );

  const checkAnswer = useMutation((id) => qnaApi.checkEscalationAnswer(companyId, id));
  const approve = useMutation(({ id, edits }) => qnaApi.approveEscalation(companyId, id, edits));
  const dismiss = useMutation((id) => qnaApi.dismissEscalation(companyId, id));

  const reload = () => {
    listQuery.reload();
    detailQuery.reload();
  };

  // 슬랙 스레드 주소를 만들려면 워크스페이스(팀) id 가 필요하다.
  const connectionsQuery = useAsync(
    () => sourcesApi.fetchConnections(companyId),
    [companyId],
    { enabled: Boolean(companyId) }
  );
  const slackWorkspaceId = (connectionsQuery.data?.items ?? []).find(
    (connection) => connection.provider === CONNECTION_KIND.SLACK
  )?.workspaceId;

  // 대표가 슬랙에 답장하고 이 화면으로 돌아오면 답을 회수한다.
  // 서버는 스스로 회수하지 않고(qna/views.py 의 check-answer 만 존재),
  // 화면에도 '가져오기' 버튼이 없으므로 돌아오는 시점을 신호로 쓴다.
  const pendingCheckRef = useRef(null);
  const collectOnReturnRef = useRef(() => {});
  collectOnReturnRef.current = async () => {
    const id = pendingCheckRef.current;
    if (!id) return;
    pendingCheckRef.current = null;
    const result = await checkAnswer.mutate(id);
    if (result.ok) reload();
  };

  useEffect(() => {
    const onFocus = () => collectOnReturnRef.current();
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, []);

  const waitingCount = rows.filter((row) => row.status === UI_STATUS.WAITING).length;
  const approvalCount = rows.filter((row) => row.status === UI_STATUS.PENDING_APPROVAL).length;
  const savedCount = rows.filter((row) => row.status === UI_STATUS.SAVED).length;

  const oldestWaiting = rows
    .filter((row) => row.status === UI_STATUS.WAITING)
    .reduce((oldest, row) => (!oldest || row.createdAt < oldest.createdAt ? row : oldest), null);

  const scopes = (scopesQuery.data?.items ?? []).filter(
    (scope) => scope.kind === SCOPE_KIND.COMPANY || scope.kind === SCOPE_KIND.PROJECT
  );

  const selectedRow = rows.find((row) => row.id === activeId) ?? null;
  const detail = detailQuery.data?.id === activeId ? detailQuery.data : null;

  if (listQuery.loading && !listQuery.data) {
    return (
      <TabContent>
        <LoadingState label="질문을 불러오는 중…" />
      </TabContent>
    );
  }

  if (listQuery.error && !listQuery.data) {
    return (
      <TabContent>
        <ErrorState error={listQuery.error} onRetry={listQuery.reload} />
      </TabContent>
    );
  }

  return (
    <TabContent>
      <HeaderTextGroup>
        <Heading>질문</Heading>
        <Subheading>
          AI가 답하지 못한 질문은 대표님 답변을 거쳐 핸드북 항목이 됩니다. 답변은 슬랙 스레드에서
          가져옵니다. 저장 단위는 질문-답변 1쌍당 항목 1개입니다
        </Subheading>
      </HeaderTextGroup>

      <InlineError error={checkAnswer.error || approve.error || dismiss.error} />

      <QuestionStatCards
        waitingCount={waitingCount}
        waitingFootnote={
          oldestWaiting ? `가장 오래된 질문 ${oldestWaiting.relativeTime}` : '대기 중인 질문 없음'
        }
        approvalCount={approvalCount}
        approvalFootnote="답변에서 만들어진 항목 제안"
        weeklySaved={savedCount}
        weeklySavedFootnote="질문-답변 1쌍당 항목 1개"
      />

      <SplitRow>
        <QuestionList questions={rows} selectedId={activeId} onSelect={setSelectedId} />
        <QuestionApprovalPanel
          question={selectedRow}
          detail={detail}
          detailLoading={detailQuery.loading}
          detailError={detailQuery.error}
          onRetryDetail={detailQuery.reload}
          scopes={scopes}
          pending={checkAnswer.pending || approve.pending || dismiss.pending}
          threadUrl={slackThreadUrl(slackWorkspaceId, selectedRow?.slackThreadRef)}
          onOpenThread={() => {
            pendingCheckRef.current = activeId;
          }}
          onApprove={async (edits) => {
            const result = await approve.mutate({ id: activeId, edits });
            if (result.ok) reload();
          }}
          onDismiss={async () => {
            const result = await dismiss.mutate(activeId);
            if (result.ok) reload();
          }}
        />
      </SplitRow>
    </TabContent>
  );
}

export default QuestionTab;
