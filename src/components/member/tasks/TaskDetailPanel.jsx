import { useState } from 'react';
import styled from 'styled-components';
import { useMemberNavigation } from '../../../context/member/MemberContext';
import chatBubbleIcon from '../../../assets/icons/chat-org.svg';
import bookIcon from '../../../assets/icons/book-org.svg';

const CTA_LABEL = {
  ready: "I'll take this on",
  inprogress: 'Mark as done',
  answered: 'Mark as done',
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

const WidenButton = styled.button`
  flex: none;
  font-size: 14px;
  font-weight: 700;
  color: #8a8a93;
  border: 1px solid #eaeaee;
  background: #fff;
  padding: 6px 11px;
  border-radius: 9px;
  cursor: pointer;

  &:hover {
    border-color: #d8d8de;
  }
`;

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

const NeutralCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 1px 2px rgba(17, 17, 20, 0.05);
  padding: 22px 24px;
`;

const NeutralTitle = styled.div`
  font-size: 14.5px;
  font-weight: 800;
`;

const NeutralDesc = styled.div`
  font-size: 14.5px;
  color: #8a8a93;
  line-height: 1.7;
  margin-top: 7px;
`;

const MessageCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow:
    0px 1px 20px 0px #0000002e,
    0 1px 0 rgba(255, 96, 0, 0.04);
  padding: 20px 22px;
`;

const KickerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const KickerDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(props) => props.$color ?? '#8A8A93'};
`;

const Kicker = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 12px;
  font-weight: 700;
  color: #a0a0a8;
  letter-spacing: 0.08em;
`;

const MessageEn = styled.div`
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -0.4px;
  line-height: 1.35;
  margin-top: 10px;
`;

const MessageBody = styled.div`
  font-size: 14px;
  color: #8a8a93;
  margin-top: 9px;
  font-family: 'IBM Plex Mono', monospace;
  line-height: 1.6;
`;

const EntryCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow:
    0px 1px 20px 0px #0000002e,
    0 1px 0 rgba(255, 96, 0, 0.04);
  padding: 18px 20px;
`;

const EntryTag = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: ${(props) => (props.$theme === 'positive' ? '#4B7950' : '#B67E38')};
  background: ${(props) => (props.$theme === 'positive' ? '#E6F0E6' : '#F9F1E5')};
  padding: 3px 8px;
  border-radius: 5px;
`;

const EntryProject = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 12px;
  color: #a0a0a8;
`;

const EntryTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-top: 10px;
  line-height: 1.45;
`;

const EntryAction = styled.button`
  width: 100%;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 700;
  color: #6b6b73;
  background: #fff;
  border: 1px solid #eaeaee;
  padding: 11px;
  border-radius: 11px;
  cursor: pointer;
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

const StepsCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow:
    0px 1px 20px 0px #0000002e,
    0 1px 0 rgba(255, 96, 0, 0.04);
  padding: 18px 20px;
`;

const StepsHeader = styled.div`
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

const StepsTitle = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 14.5px;
  font-weight: 800;
`;

const SearchableTag = styled.span`
  flex: none;
  white-space: nowrap;
  font-size: 11.5px;
  font-weight: 700;
  color: #c97a22;
  background: #fdf1e4;
  padding: 3px 8px;
  border-radius: 6px;
`;

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
`;

const StepRow = styled.button`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 11px;
  text-align: left;
  background: #fafafb;
  border: 1px solid #efeff1;
  padding: 12px 14px;
  border-radius: 11px;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    border-color: #ffc49b;
    background: #fff;
    box-shadow: 0 6px 16px rgba(17, 17, 20, 0.07);
  }
`;

const StepDot = styled.span`
  flex: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ff8a3d;
  margin-top: 8px;
`;

const StepTextBlock = styled.span`
  flex: 1;
  min-width: 0;
  line-height: 1.45;
`;

const StepTitle = styled.span`
  display: block;
  font-size: 14.5px;
  font-weight: 600;
  color: #17171b;
`;

const StepSrc = styled.span`
  display: block;
  font-size: 12px;
  color: #a0a0a8;
  margin-top: 5px;
  font-family: 'IBM Plex Mono', monospace;
`;

const StepArrow = styled.span`
  flex: none;
  align-self: center;
  font-size: 13px;
  color: #c8c8d0;
`;

const AskCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow:
    0px 1px 20px 0px #0000002e,
    0 1px 0 rgba(255, 96, 0, 0.04);
  padding: 18px 20px;
`;

const AskHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const AskTitle = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 14.5px;
  font-weight: 800;
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
    border-color: #ff6000;
    box-shadow: 0 0 0 3px rgba(255, 96, 0, 0.12);
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

const ResolvedBanner = styled.div`
  display: flex;
  gap: 12px;
  background: linear-gradient(135deg, rgba(255, 96, 0, 0.07), rgba(255, 138, 61, 0.03));
  border: 1px solid rgba(255, 96, 0, 0.16);
  border-radius: 13px;
  padding: 14px 15px;
  margin-bottom: 14px;
`;

const ResolvedIcon = styled.div`
  width: 26px;
  height: 26px;
  flex: none;
  border-radius: 9px;
  background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 14px rgba(255, 96, 0, 0.28);
`;

const ResolvedTitle = styled.div`
  font-size: 14.5px;
  font-weight: 800;
`;

const ResolvedDesc = styled.div`
  font-size: 14px;
  color: #6b6b73;
  line-height: 1.65;
  margin-top: 5px;
`;

const StillCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 1px 20px 0px #0000002e;
  padding: 18px 20px;
`;

const StillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const StillBadge = styled.span`
  flex: none;
  width: 26px;
  height: 26px;
  border-radius: 9px;
  background: #f1eefe;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7b5bd6;
  font-size: 12.5px;
  font-weight: 800;
`;

const StillTitle = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 14.5px;
  font-weight: 800;
`;

const StillDesc = styled.div`
  font-size: 13px;
  color: #8a8a93;
  line-height: 1.65;
  margin-top: 7px;
`;

const StillInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 11px;
`;

const StillInput = styled.input`
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
    border-color: #ff6000;
    box-shadow: 0 0 0 3px rgba(255, 96, 0, 0.12);
  }
`;

const StillButton = styled.button`
  flex: none;
  white-space: nowrap;
  background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 11px 16px;
  border-radius: 11px;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(255, 96, 0, 0.28);
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

export default function TaskDetailPanel({ task, isWide, onToggleWide, onClose, onMoveAction }) {
  const { goToAskWithQuestion } = useMemberNavigation();
  const [askDraft, setAskDraft] = useState('');
  const [stillDraft, setStillDraft] = useState('');

  if (!task) return null;

  const ctaLabel = CTA_LABEL[task.columnId];

  function handleAskSend() {
    if (!askDraft.trim()) return;
    goToAskWithQuestion(askDraft.trim());
  }

  function handleStillSend() {
    if (!stillDraft.trim()) return;
    goToAskWithQuestion(stillDraft.trim());
  }

  return (
    <Overlay $wide={isWide}>
      <Header>
        <HeaderTitle>Task detail</HeaderTitle>
        <WidenButton onClick={onToggleWide}>{isWide ? '⤡ Collapse' : '⤢ Expand'}</WidenButton>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Header>

      <Body>
        {task.type === 'plain' && (
          <NeutralCard>
            <NeutralTitle>Nothing to do here</NeutralTitle>
            <NeutralDesc>Context, not a task.</NeutralDesc>
          </NeutralCard>
        )}

        {task.type === 'message' && (
          <>
            <MessageCard>
              <KickerRow>
                <KickerDot $color={task.kickerColor ?? '#8A8A93'} />
                <Kicker>{task.kicker}</Kicker>
              </KickerRow>
              <MessageEn>{task.en}</MessageEn>
              <MessageBody>{task.body}</MessageBody>
            </MessageCard>

            <EntryCard>
              <KickerRow>
                <EntryTag $theme={task.entryTagTheme ?? 'neutral'}>{task.entryTag}</EntryTag>
                <EntryProject>{task.entryProject}</EntryProject>
              </KickerRow>
              <EntryTitle>{task.entryTitle}</EntryTitle>
              <EntryAction onClick={task.onToHandbook}>{task.entryAction} →</EntryAction>
            </EntryCard>
          </>
        )}

        {task.type === 'main' && (
          <>
            <MainCard>
              <MainCardTop>
                <MainCardDot />
                <MainCardKicker>WHAT YOU NEED TO DO</MainCardKicker>
                <MainCardWhen>{task.when}</MainCardWhen>
              </MainCardTop>
              <MainCardBody>
                <Purpose>{task.purpose}</Purpose>
                <MetaRow>
                  <DeliverableBox>
                    <MetaLabel>DELIVERABLE</MetaLabel>
                    <DeliverableValue>{task.output}</DeliverableValue>
                  </DeliverableBox>
                  <DueBox>
                    <DueLabel>DUE</DueLabel>
                    <DueValue>{task.deadline}</DueValue>
                  </DueBox>
                </MetaRow>
              </MainCardBody>
            </MainCard>

            {task.steps?.length > 0 && (
              <StepsCard>
                <StepsHeader>
                  <IconBadge>
                    <img src={bookIcon} alt="" width={15} height={15} />
                  </IconBadge>
                  <StepsTitle>Handbook rules for this task</StepsTitle>
                  <SearchableTag>searchable</SearchableTag>
                </StepsHeader>

                <StepList>
                  {task.steps.map((st, i) => (
                    <StepRow key={i} onClick={st.onClick}>
                      <StepDot />
                      <StepTextBlock>
                        <StepTitle>{st.title}</StepTitle>
                        <StepSrc>{st.src}</StepSrc>
                      </StepTextBlock>
                      <StepArrow>→</StepArrow>
                    </StepRow>
                  ))}
                </StepList>
              </StepsCard>
            )}

            <AskCard>
              {task.resolved && (
                <ResolvedBanner>
                  <ResolvedIcon>
                    <img src={chatBubbleIcon} alt="" width={13} height={13} />
                  </ResolvedIcon>
                  <div>
                    <ResolvedTitle>Nice — you are clear to start.</ResolvedTitle>
                    <ResolvedDesc>Ask any time — I will handle the Korean.</ResolvedDesc>
                  </div>
                </ResolvedBanner>
              )}

              <AskHeader>
                <IconBadge>
                  <img src={chatBubbleIcon} alt="" width={15} height={15} />
                </IconBadge>
                <AskTitle>Unclear? Ask SAI first.</AskTitle>
              </AskHeader>

              <AskInputRow>
                <AskInput
                  value={askDraft}
                  onChange={(e) => setAskDraft(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAskSend()}
                  placeholder="Ask something else…"
                />
                <AskButton onClick={handleAskSend}>Ask</AskButton>
              </AskInputRow>
            </AskCard>

            <StillCard>
              <StillHeader>
                <StillBadge>한</StillBadge>
                <StillTitle>Still not clear? Write it in your language.</StillTitle>
              </StillHeader>
              <StillDesc>
                Type it in English — SAI turns it into a Korean message for 김대표 and opens it in
                Ask SAI.
              </StillDesc>
              <StillInputRow>
                <StillInput
                  value={stillDraft}
                  onChange={(e) => setStillDraft(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleStillSend()}
                  placeholder="e.g. Should the fix include tests?"
                />
                <StillButton onClick={handleStillSend}>Make it Korean →</StillButton>
              </StillInputRow>
            </StillCard>
          </>
        )}

        {task.isDone ? (
          <StatusCard>
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
              <DoneButton onClick={onMoveAction}>{task.undoLabel ?? 'Undo'}</DoneButton>
            </DoneRow>
          </StatusCard>
        ) : (
          ctaLabel && (
            <StatusCard>
              <StatusLabel>TASK STATUS</StatusLabel>
              <StatusButton onClick={onMoveAction}>{ctaLabel}</StatusButton>
              {task.moveHint && <StatusHint>{task.moveHint}</StatusHint>}
            </StatusCard>
          )
        )}
      </Body>
    </Overlay>
  );
}
