import styled from 'styled-components';
import { useMemberNavigation } from '../../../context/member/MemberContext';
import chatBubbleIcon from '../../../assets/icons/chat-bubble.svg';
import bookIcon from '../../../assets/icons/book.svg';

const CTA_LABEL = {
  ready: "I'll take this on",
  inprogress: 'Mark as done',
  answered: 'That answers it',
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
  width: ${(props) => (props.$wide ? '620px' : '420px')};
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  background: #F7F7F8;
  box-shadow: -12px 0 40px rgba(17, 17, 20, 0.12);
  transition: width 0.18s ease;
`;

const Header = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 20px;
  border-bottom: 1px solid #F2F2F4;
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
  color: #8A8A93;
  border: 1px solid #EAEAEE;
  background: #fff;
  padding: 6px 11px;
  border-radius: 9px;
  cursor: pointer;

  &:hover {
    border-color: #D8D8DE;
  }
`;

const CloseButton = styled.button`
  flex: none;
  font-size: 16px;
  font-weight: 700;
  color: #8A8A93;
  background: none;
  border: none;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    color: #17171B;
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
  color: #8A8A93;
  line-height: 1.7;
  margin-top: 7px;
`;

const MessageCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 1px 20px 0px #0000002E, 0 1px 0 rgba(255, 96, 0, 0.04);
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
  background: #8A8A93;
`;

const Kicker = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 12px;
  font-weight: 700;
  color: #A0A0A8;
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
  color: #8A8A93;
  margin-top: 9px;
  font-family: 'IBM Plex Mono', monospace;
  line-height: 1.6;
`;

const EntryCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 1px 20px 0px #0000002E, 0 1px 0 rgba(255, 96, 0, 0.04);
  padding: 18px 20px;
`;

const EntryTag = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #B67E38;
  background: #F9F1E5;
  padding: 3px 8px;
  border-radius: 5px;
`;

const EntryProject = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 12px;
  color: #A0A0A8;
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
  color: #6B6B73;
  background: #fff;
  border: 1px solid #EAEAEE;
  padding: 11px;
  border-radius: 11px;
  cursor: pointer;
`;

const MainCard = styled.div`
  background: #FF6000;
  border-radius: 18px;
  box-shadow: 0 1px 20px rgba(255, 96, 0, 0.42), 0 14px 34px rgba(255, 96, 0, 0.20);
  overflow: hidden;
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
  color: #C97A22;
  letter-spacing: 0.06em;
`;

const DueValue = styled.div`
  font-size: 14.5px;
  font-weight: 700;
  margin-top: 4px;
  color: #B4600D;
  white-space: nowrap;
`;

const StepsCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 1px 20px 0px #0000002E, 0 1px 0 rgba(255, 96, 0, 0.04);
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
  background: #FFF1E6;
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
  color: #C97A22;
  background: #FDF1E4;
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
  background: #FAFAFB;
  border: 1px solid #EFEFF1;
  padding: 12px 14px;
  border-radius: 11px;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    border-color: #FFC49B;
    background: #fff;
    box-shadow: 0 6px 16px rgba(17, 17, 20, 0.07);
  }
`;

const StepDot = styled.span`
  flex: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #FF8A3D;
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
  color: #17171B;
`;

const StepSrc = styled.span`
  display: block;
  font-size: 12px;
  color: #A0A0A8;
  margin-top: 5px;
  font-family: 'IBM Plex Mono', monospace;
`;

const StepArrow = styled.span`
  flex: none;
  align-self: center;
  font-size: 13px;
  color: #C8C8D0;
`;

const AskCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 1px 20px 0px #0000002E, 0 1px 0 rgba(255, 96, 0, 0.04);
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

const AskInputLook = styled.div`
  flex: 1;
  min-width: 0;
  font-size: 14px;
  color: #B4B4BC;
  background: #FAFAFB;
  border: 1px solid #EFEFF1;
  padding: 11px 14px;
  border-radius: 11px;
`;

const AskButton = styled.button`
  flex: none;
  white-space: nowrap;
  background: #17171B;
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
  background: linear-gradient(135deg, #FF6000 0%, #FF8A3D 100%);
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
  color: #6B6B73;
  line-height: 1.65;
  margin-top: 5px;
`;

const StatusCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 1px 20px 0px #0000002E;
  padding: 16px 18px;
`;

const StatusLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #B4B4BC;
  letter-spacing: 0.09em;
`;

const StatusButton = styled.button`
  width: 100%;
  margin-top: 11px;
  background: linear-gradient(135deg, #FF6000 0%, #FF8A3D 100%);
  color: #fff;
  font-size: 14.5px;
  font-weight: 700;
  padding: 12px;
  border-radius: 11px;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(255, 96, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.25);
`;

const StatusHint = styled.div`
  font-size: 12.5px;
  color: #A0A0A8;
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
  background: #3BA55C;
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

export default function TaskDetailPanel({ task, isWide, onToggleWide, onClose, onMoveAction }) {
  const { goToAsk } = useMemberNavigation();

  if (!task) return null;

  const ctaLabel = CTA_LABEL[task.columnId];

  return (
    <Overlay $wide={isWide}>
      <Header>
        <HeaderTitle>Task detail</HeaderTitle>
        <WidenButton onClick={onToggleWide}>{isWide ? 'Narrow' : 'Widen'}</WidenButton>
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
                <KickerDot />
                <Kicker>{task.kicker}</Kicker>
              </KickerRow>
              <MessageEn>{task.en}</MessageEn>
              <MessageBody>{task.body}</MessageBody>
            </MessageCard>

            <EntryCard>
              <KickerRow>
                <EntryTag>{task.entryTag}</EntryTag>
                <EntryProject>{task.entryProject}</EntryProject>
              </KickerRow>
              <EntryTitle>{task.entryTitle}</EntryTitle>
              <EntryAction onClick={task.onToHandbook}>{task.entryAction}</EntryAction>
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
                <AskInputLook>Ask something else…</AskInputLook>
                <AskButton onClick={goToAsk}>Ask</AskButton>
              </AskInputRow>
            </AskCard>

            {task.isDone ? (
              <StatusCard>
                <DoneRow>
                  <DoneCheck>
                    <svg width="11" height="11" viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="1.9">
                      <path d="M2 5.2l2 2L8 3" />
                    </svg>
                  </DoneCheck>
                  <DoneLabel>Done</DoneLabel>
                </DoneRow>
              </StatusCard>
            ) : (
              ctaLabel && (
                <StatusCard>
                  <StatusLabel>TASK STATUS</StatusLabel>
                  <StatusButton onClick={onMoveAction}>{ctaLabel}</StatusButton>
                  <StatusHint>{task.moveHint}</StatusHint>
                </StatusCard>
              )
            )}
          </>
        )}
      </Body>
    </Overlay>
  );
}