import styled from 'styled-components';

import { REPLY_BASIS, TIMING_BUCKET_LIMIT, WORK_STATE } from '../../../apis/constants';
import { useZoneTime } from '../../../hooks/member/useZoneTime.js';
import { formatDateTime, formatTimeOfDay } from '../../../utils/time';
import { EmptyState, ErrorState, LoadingState } from '../../common/AsyncStates';
import { useMemberNavigation } from '../../../context/member/MemberContext';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 60;
  background: rgba(23, 23, 27, 0.42);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 900px;
  max-height: 100%;
  overflow-y: auto;
  background: #f7f7f8;
  border-radius: 22px;
  box-shadow: 0 30px 80px rgba(17, 17, 20, 0.35);
  padding: 26px 28px;
  transform: scale(${(props) => props.$scale ?? 1});
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  margin-bottom: 16px;
`;

const HeaderText = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h2`
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -0.3px;
  color: #17171b;
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: #8a8a93;
  font-weight: 400;
  margin-top: 3px;
`;

const CloseButton = styled.button`
  flex: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #eaeaee;
  font-size: 15px;
  color: #6b6b73;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border-color: #d8d8de;
    color: #17171b;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TimeCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow:
    0 1px 20px 0 rgba(0, 0, 0, 0.18),
    0 1px 0 0 rgba(255, 96, 0, 0.04);
  padding: 24px 26px;
  align-items: flex-start;
  align-self: stretch;
`;

const TimeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const TimeLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #a0a0a8;
  letter-spacing: 0.07em;
  white-space: nowrap;
`;

const TimeValue = styled.div`
  font-size: 31.5px;
  font-weight: 800;
  letter-spacing: -0.8px;
  margin-top: 4px;
  color: ${(props) => (props.$muted ? '#8A8A93' : '#17171B')};
`;

const VerticalDivider = styled.div`
  width: 1px;
  height: 44px;
  background: #efeff1;
`;

const NoteBox = styled.div`
  flex: 1;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #f7f7f8;
  border-radius: 12px;
  padding: 14px 16px;
`;

const NoteTitle = styled.div`
  font-size: 15.5px;
  font-weight: 700;
  color: #17171b;
`;

const NoteDesc = styled.div`
  font-size: 14.5px;
  font-weight: 400;
  color: #6b6b73;
  line-height: 23.2px;
  margin-top: 5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: start;
`;

const ListCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow:
    0 1px 20px 0 rgba(0, 0, 0, 0.18),
    0 1px 0 0 rgba(255, 96, 0, 0.04);
  padding: 22px 24px;
`;

const ListCardTitle = styled.div`
  font-size: 15.5px;
  font-weight: 800;
`;

const ListCardSubtitle = styled.div`
  font-size: 13px;
  color: #a0a0a8;
  margin-top: 4px;
`;

const ListItem = styled.div`
  border-top: 1px solid #f2f2f4;
  padding: 14px 0;
`;

const ListItemTitle = styled.div`
  font-size: 15.5px;
  font-weight: 600;
  line-height: 24.025px;
`;

const ListItemSrc = styled.div`
  font-size: 12px;
  color: #a0a0a8;
  font-weight: 400;
  margin-top: 5px;
`;

const MoreNote = styled.div`
  font-size: 12px;
  color: #b4b4bc;
  padding-top: 10px;
`;

const TaskButton = styled.button`
  width: 100%;
  color: #fff;
  font-size: 14.5px;
  font-weight: 700;
  padding: 12px;
  border-radius: 11px;
  margin-top: 14px;
  background: linear-gradient(135deg, #ff6000 0%, #ff8a3d 100%);
  box-shadow:
    0 6px 16px 0 rgba(255, 96, 0, 0.28),
    0 1px 0 0 rgba(255, 255, 255, 0.25) inset;
  cursor: pointer;
  border: none;
`;

function cityOf(timezone) {
  if (!timezone) return '';
  return timezone.split('/').pop().replace(/_/g, ' ').toUpperCase();
}

function PersonClock({ label, person, muted }) {
  const time = useZoneTime(person?.timezone);
  return (
    <div>
      <TimeLabel>
        {label}
        {person?.timezone ? ` · ${cityOf(person.timezone)}` : ''}
      </TimeLabel>
      <TimeValue $muted={muted}>{time}</TimeValue>
    </div>
  );
}

export default function TimingModal({ onClose, onGoTaskCard, scale = 1 }) {
  const { timing, timingLoading, timingError, reloadTiming, profile } = useMemberNavigation();

  const hours = timing?.workingHours;
  const hoursLabel = hours
    ? `${formatTimeOfDay(hours.start)}–${formatTimeOfDay(hours.end)} ${cityOf(hours.timezone)}`
    : '';

  const ownerState = timing?.owner?.state;
  const noteTitle = (() => {
    if (!timing) return '';
    if (ownerState === WORK_STATE.WORKING) return `Owner is currently working (${hoursLabel})`;
    if (ownerState === WORK_STATE.OFF_HOURS) return `Outside owner's working hours (${hoursLabel})`;
    return 'This company does not use working hours';
  })();

  const replyAt = formatDateTime(timing?.replyExpected?.at, {
    fallback: '—',
    timeZone: profile.timezone,
  });
  const basis = timing?.replyExpected?.basis;
  const noteDesc = (() => {
    if (!timing) return '';
    if (basis === REPLY_BASIS.HISTORY) {
      return `If you send now, expect a reply around ${replyAt}. Based on the median of ${timing.replyExpected.sampleSize} past replies.`;
    }
    // WORKING_HOURS: 표본이 모자라 다음 근무 시작 시각을 그대로 쓴 것이다.
    return `If you send now, expect a reply around the next working start at ${replyAt}. Only ${timing?.replyExpected?.sampleSize ?? 0} past replies so far, so this is based on working hours.`;
  })();

  const canDo = timing?.canDo ?? [];
  const needsPerson = timing?.needsPerson ?? [];

  return (
    <Overlay onClick={onClose}>
      <Modal $scale={scale} onClick={(e) => e.stopPropagation()}>
        <Header>
          <HeaderText>
            <Title>Timing</Title>
            <Subtitle>
              {hours
                ? hours.enabled
                  ? `Owner hours ${hoursLabel}`
                  : 'This company does not use working hours'
                : 'Loading working hours…'}
            </Subtitle>
          </HeaderText>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </Header>

        {timingLoading && !timing && <LoadingState label="Loading timing info…" />}
        {timingError && !timing && <ErrorState error={timingError} onRetry={reloadTiming} />}

        {timing && (
          <Body>
            <TimeCard>
              <TimeRow>
                <PersonClock label="YOUR TIME" person={timing.you} />
                <VerticalDivider />
                <PersonClock label="OWNER" person={timing.owner} muted />

                <NoteBox>
                  <NoteTitle>{noteTitle}</NoteTitle>
                  <NoteDesc>{noteDesc}</NoteDesc>
                </NoteBox>
              </TimeRow>
            </TimeCard>

            <Grid>
              <ListCard>
                <ListCardTitle>You can move on these now</ListCardTitle>
                <ListCardSubtitle>
                  Steps that don't need the owner's reply. Ones with handbook backing show first.
                </ListCardSubtitle>
                {canDo.length === 0 ? (
                  <EmptyState compact label="Nothing to move on right now" />
                ) : (
                  canDo.map((item) => (
                    <ListItem key={`${item.cardId}-${item.stepId}`}>
                      <ListItemTitle>{item.title}</ListItemTitle>
                      <ListItemSrc>
                        {/* entryId 가 있으면 그 규칙이 근거, 없으면 근거로 삼을 규칙이 없다는 뜻. */}
                        {item.entryId
                          ? `Based on · ${item.entryTitle}${item.scopeName ? ` · ${item.scopeName}` : ''}`
                          : 'No rule to base this on'}
                      </ListItemSrc>
                    </ListItem>
                  ))
                )}
                {timing.canDoTotal > TIMING_BUCKET_LIMIT && (
                  <MoreNote>
                    Showing {canDo.length} of {timing.canDoTotal}
                  </MoreNote>
                )}
              </ListCard>

              <ListCard>
                <ListCardTitle>These need a person</ListCardTitle>
                <ListCardSubtitle>Unresolved items that need the owner's answer.</ListCardSubtitle>
                {needsPerson.length === 0 ? (
                  <EmptyState compact label="Nothing waiting on the owner" />
                ) : (
                  needsPerson.map((item) => (
                    <ListItem key={`${item.cardId}-${item.blankId}`}>
                      <ListItemTitle>{item.title}</ListItemTitle>
                      <ListItemSrc>
                        {[
                          item.scopeName,
                          item.escalationStatus
                            ? `Question ${item.escalationStatus}`
                            : 'Not sent yet',
                        ]
                          .filter(Boolean)
                          .join(' · ')}
                      </ListItemSrc>
                    </ListItem>
                  ))
                )}
                {timing.needsPersonTotal > TIMING_BUCKET_LIMIT && (
                  <MoreNote>
                    Showing {needsPerson.length} of {timing.needsPersonTotal}
                  </MoreNote>
                )}
                <TaskButton onClick={onGoTaskCard}>Open the related task card</TaskButton>
              </ListCard>
            </Grid>
          </Body>
        )}
      </Modal>
    </Overlay>
  );
}
