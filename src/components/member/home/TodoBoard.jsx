import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import * as cardsApi from '../../../apis/cards';
import { TASK_STATUS } from '../../../apis/constants';
import { useAsync, useMutation } from '../../../hooks/useAsync';
import { EmptyState, ErrorState, InlineError, LoadingState } from '../../common/AsyncStates';
import { useMemberNavigation } from '../../../context/member/MemberContext';
import sharpIcon from '../../../assets/icons/sharp.svg';
import plusIcon from '../../../assets/icons/plus.svg';

const CheckIcon = () => (
  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
    <path
      d="M2 5.2l2 2L8 3"
      stroke="#fff"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Board = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 17px 20px;
  border-bottom: 1px solid #f2f2f4;
`;

const HeaderTitle = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 16px;
  font-weight: 700;
`;

const CountBadge = styled.span`
  flex: none;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 700;
  color: #6b6b73;
  background: #f7f7f8;
  padding: 5px 10px;
  border-radius: 20px;
  line-height: 128%;
`;

const Body = styled.div`
  padding: 0 20px 28px 20px;
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 12px;
`;

const Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 78px;
  padding: 0 20px 0 22px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid ${(props) => (props.$done ? '#F6E2D0' : '#EFEFF1')};
  background: ${(props) =>
    props.$done ? '#F7F7F8' : 'linear-gradient(180deg, #FFFBF7 0%, #fff 70%)'};
  cursor: ${(props) => (props.$busy ? 'progress' : 'pointer')};
  opacity: ${(props) => (props.$busy ? 0.6 : 1)};

  &:hover {
    border-color: ${(props) => (props.$done ? '#D8D8DE' : '#FFC49B')};
    box-shadow: ${(props) =>
      props.$done ? '0 4px 12px rgba(17, 17, 20, 0.06)' : '0 8px 20px rgba(17, 17, 20, 0.09)'};
  }
`;

const Accent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: ${(props) => (props.$done ? '#D8D8DE' : 'linear-gradient(180deg, #FF6000, #FF8A3D)')};
`;

const CheckBox = styled.span`
  width: 19px;
  height: 19px;
  flex: none;
  border-radius: 6px;
  border: 1.5px solid ${(props) => (props.$done ? 'transparent' : '#DADAE0')};
  background: ${(props) => (props.$done ? '#B4B4BC' : '#fff')};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${(props) => (props.$done ? 'transparent' : '#FF8A3D')};
  }
`;

const TaskText = styled.div`
  flex: 1;
  min-width: 0;
`;

const TaskTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => (props.$done ? '#B4B4BC' : '#17171B')};
  text-decoration: ${(props) => (props.$done ? 'line-through' : 'none')};
`;

const TaskMeta = styled.div`
  font-size: 11.5px;
  color: #a0a0a8;
  margin-top: 4px;
`;

const AddRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding-top: 6px;
  margin-top: 9px;
`;

const AddPlaceholder = styled.button`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: 14px;
  color: #b4b4bc;
  background: #fafafb;
  border: 0.67px dashed #e2e2e7;
  padding: 11px 14px;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.82;
  }
`;

const AddInput = styled.input`
  flex: 1;
  min-width: 0;
  font-size: 14px;
  color: #17171b;
  background: #fff;
  border: 1px solid #ffc49b;
  padding: 11px 14px;
  border-radius: 12px;
  outline: none;

  &:focus {
    border-color: #ff8a3d;
    box-shadow: 0 0 0 3px rgba(255, 138, 61, 0.15);
  }

  &::placeholder {
    color: #b4b4bc;
  }
`;

const AddCircle = styled.button`
  width: 34px;
  height: 34px;
  flex: none;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-size: 17.5px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 14px 34px 0 rgba(23, 44, 90, 0.22);

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

// 서버가 순서(완료는 아래)와 보존 기간(완료 후 하루)을 이미 정해 준다.
// 화면은 받은 순서 그대로 그린다.
export default function TodoBoard() {
  const { companyId, reloadHome } = useMemberNavigation();

  const tasksQuery = useAsync(() => cardsApi.fetchTasks(companyId), [companyId], {
    enabled: Boolean(companyId),
  });

  const [isAdding, setIsAdding] = useState(false);
  const [draft, setDraft] = useState('');
  const [busyId, setBusyId] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isAdding) inputRef.current?.focus();
  }, [isAdding]);

  const toggle = useMutation(async (task) => {
    const next = task.done ? TASK_STATUS.TODO : TASK_STATUS.DONE;
    return cardsApi.updateTask(companyId, task.id, { status: next });
  });

  const create = useMutation((title) => cardsApi.createTask(companyId, { title }));

  const tasks = tasksQuery.data?.items ?? [];
  const remainingCount = tasks.filter((task) => !task.done).length;

  async function handleToggle(task) {
    if (busyId) return;
    setBusyId(task.id);
    const result = await toggle.mutate(task);
    setBusyId(null);
    if (result.ok) {
      await tasksQuery.reload();
      // 홈의 '오늘 처리한 양'도 같이 움직인다.
      reloadHome();
    }
  }

  async function handleSubmitTask() {
    const title = draft.trim();
    if (!title) return;
    const result = await create.mutate(title);
    if (!result.ok) return;
    setDraft('');
    setIsAdding(false);
    tasksQuery.reload();
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSubmitTask();
    if (e.key === 'Escape') {
      setDraft('');
      setIsAdding(false);
    }
  }

  return (
    <Board>
      <Header>
        <img src={sharpIcon} alt="" width={15} height={15} />
        <HeaderTitle>TO DO</HeaderTitle>
        <CountBadge>{remainingCount} remaining</CountBadge>
      </Header>

      <Body>
        <InlineError error={toggle.error || create.error} />

        {tasksQuery.loading && !tasksQuery.data && (
          <LoadingState compact label="할 일을 불러오는 중…" />
        )}
        {tasksQuery.error && !tasksQuery.data && (
          <ErrorState error={tasksQuery.error} onRetry={tasksQuery.reload} compact />
        )}

        {tasksQuery.data && (
          <TaskList>
            {tasks.length === 0 ? (
              <EmptyState
                compact
                label="아직 할 일이 없습니다. 아래에서 직접 추가할 수 있습니다."
              />
            ) : (
              tasks.map((task) => (
                <Row
                  key={task.id}
                  $done={task.done}
                  $busy={busyId === task.id}
                  onClick={() => handleToggle(task)}
                >
                  <Accent $done={task.done} />
                  <CheckBox $done={task.done}>{task.done && <CheckIcon />}</CheckBox>
                  <TaskText>
                    <TaskTitle $done={task.done}>{task.title}</TaskTitle>
                    {/* origin 이 CARD 면 지시 카드에서 담긴 것, SELF 면 직접 적은 것. */}
                    {(task.scopeName || task.requestedBy) && (
                      <TaskMeta>
                        {[task.scopeName, task.requestedBy && `from ${task.requestedBy}`]
                          .filter(Boolean)
                          .join(' · ')}
                      </TaskMeta>
                    )}
                  </TaskText>
                </Row>
              ))
            )}
          </TaskList>
        )}

        <AddRow>
          {isAdding ? (
            <AddInput
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={() => !draft && setIsAdding(false)}
              placeholder="Add a task…"
            />
          ) : (
            <AddPlaceholder onClick={() => setIsAdding(true)}>Add a task…</AddPlaceholder>
          )}

          <AddCircle
            onClick={isAdding ? handleSubmitTask : () => setIsAdding(true)}
            disabled={create.pending || (isAdding && !draft.trim())}
          >
            <img src={plusIcon} alt="" width={9} height={9} />
          </AddCircle>
        </AddRow>
      </Body>
    </Board>
  );
}
