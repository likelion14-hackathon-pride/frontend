import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
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
  cursor: pointer;

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

const TaskTitle = styled.div`
  flex: 1;
  min-width: 0;
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => (props.$done ? '#B4B4BC' : '#17171B')};
  text-decoration: ${(props) => (props.$done ? 'line-through' : 'none')};
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

const EXPIRE_HOURS = 3;
const MAX_VISIBLE = 4;

export default function TodoBoard({ initialTasks = [] }) {
  const [tasks, setTasks] = useState(() =>
    initialTasks.map((t) => ({ ...t, isDone: false, completedAt: null }))
  );
  const [, forceTick] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [draft, setDraft] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => forceTick((n) => n + 1), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isAdding) inputRef.current?.focus();
  }, [isAdding]);

  function handleToggle(id) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, isDone: !t.isDone, completedAt: !t.isDone ? Date.now() : null } : t
      )
    );
  }

  function handleSubmitTask() {
    const title = draft.trim();
    if (!title) return;
    setTasks((prev) => [{ id: Date.now(), title, isDone: false, completedAt: null }, ...prev]);
    setDraft('');
    setIsAdding(false);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSubmitTask();
    if (e.key === 'Escape') {
      setDraft('');
      setIsAdding(false);
    }
  }

  const visibleTasks = tasks
    .filter((t) => {
      if (!t.isDone) return true;
      const elapsedHours = (Date.now() - t.completedAt) / (1000 * 60 * 60);
      return elapsedHours < EXPIRE_HOURS;
    })
    .slice(0, MAX_VISIBLE);

  const remainingCount = tasks.filter((t) => !t.isDone).length;

  return (
    <Board>
      <Header>
        <img src={sharpIcon} alt="" width={15} height={15} />
        <HeaderTitle>TO DO</HeaderTitle>
        <CountBadge>{remainingCount} remaining</CountBadge>
      </Header>

      <Body>
        <TaskList>
          {visibleTasks.map((t) => (
            <Row key={t.id} $done={t.isDone} onClick={() => handleToggle(t.id)}>
              <Accent $done={t.isDone} />
              <CheckBox $done={t.isDone}>{t.isDone && <CheckIcon />}</CheckBox>
              <TaskTitle $done={t.isDone}>{t.title}</TaskTitle>
            </Row>
          ))}
        </TaskList>

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
            disabled={isAdding && !draft.trim()}
          >
            <img src={plusIcon} alt="" width={9} height={9} />
          </AddCircle>
        </AddRow>
      </Body>
    </Board>
  );
}
