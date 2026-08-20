import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import * as authApi from '../../../apis/auth';
import * as companiesApi from '../../../apis/companies';
import {
  JOB_ROLE_LABEL,
  LOCATION_ZONE,
  WORK_LOCATION_LABEL,
  lookup,
} from '../../../apis/constants';
import { useAsync, useMutation } from '../../../hooks/useAsync';
import { zoneOffsetLabel } from '../../../utils/time';
import { ErrorState, InlineError, LoadingState } from '../../common/AsyncStates';
import { useMemberNavigation } from '../../../context/member/MemberContext';

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 60;
  background: rgba(23, 23, 27, 0.42);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 560px;
  max-height: 100%;
  overflow-y: auto;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 30px 80px rgba(17, 17, 20, 0.35);
  padding: 26px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const HeaderText = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.4px;
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: #8a8a93;
  margin-top: 3px;
`;

const CloseButton = styled.button`
  flex: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f7f7f8;
  border: none;
  font-size: 15px;
  color: #6b6b73;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #17171b;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const Label = styled.div`
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.07em;
  color: #a0a0a8;
`;

const ReadOnlyValue = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #17171b;
  background: #f7f7f8;
  border: 1px solid #efeff1;
  border-radius: 12px;
  padding: 12px 14px;
`;

const FieldNote = styled.p`
  margin: 0;
  font-size: 11.5px;
  color: #a0a0a8;
  line-height: 1.5;
`;

const ChipGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: Arial;
  font-size: 13.5px;
  font-weight: 700;
  color: ${(props) => (props.$active ? '#C24A00' : '#17171B')};
  background: ${(props) => (props.$active ? '#FFF3EB' : '#fff')};
  border: 1px solid ${(props) => (props.$active ? '#FF8A3D' : '#EAEAEE')};
  border-radius: 12px;
  padding: 10px 14px;
  cursor: pointer;

  &:hover {
    border-color: #c2c1c1;
  }
`;

const ChipMeta = styled.span`
  font-size: 11.5px;
  font-weight: 700;
  color: ${(props) => (props.$active ? '#E07A3A' : '#A0A0A8')};
  font-family: 'IBM Plex Mono';
`;

const OverlapNote = styled.div`
  font-size: 12px;
  color: #a0a0a8;
  line-height: 1.5;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
`;

const SaveButton = styled.button`
  flex: 1;
  font-size: 13.5px;
  font-weight: 700;
  color: #fff;
  background: #17171b;
  border: none;
  padding: 12px 16px;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const CancelButton = styled.button`
  flex: none;
  font-size: 13px;
  font-weight: 700;
  color: #6b6b73;
  background: #f7f7f8;
  border: none;
  padding: 12px 16px;
  border-radius: 12px;
  cursor: pointer;
`;

// GET /companies/{id}/profile-options 가 위치별 대표 근무시간과 겹치는 시간까지 함께 준다.
export default function ProfileSettingModal({ onClose }) {
  const { companyId, profile, applyMe } = useMemberNavigation();

  const optionsQuery = useAsync(() => companiesApi.fetchProfileOptions(companyId), [companyId], {
    enabled: Boolean(companyId),
  });

  const [location, setLocation] = useState(profile.location ?? '');
  const [role, setRole] = useState(profile.role ?? '');

  useEffect(() => {
    setLocation(profile.location ?? '');
    setRole(profile.role ?? '');
  }, [profile.location, profile.role]);

  const save = useMutation(async () => {
    const patch = {};
    if (location && location !== profile.location) patch.location = location;
    if (role && role !== profile.role) patch.role = role;
    // 아무것도 안 바뀌었으면 서버가 profile_field_required 로 거절한다. 그냥 닫는다.
    if (Object.keys(patch).length === 0) return null;
    return authApi.updateMe(patch);
  });

  const handleSave = async () => {
    const result = await save.mutate();
    if (!result.ok) return;
    if (result.data) applyMe(result.data);
    onClose?.();
  };

  // 서버는 HANOI/DA_NANG 을 여전히 따로 준다. 화면에서는 "Ho Chi Minh" 하나로 합쳐 보여준다.
  const rawLocations = optionsQuery.data?.locations ?? [];
  const locations = useMemo(
    () =>
      rawLocations
        .filter((item) => item.value !== 'DA_NANG')
        .map((item) => (item.value === 'HANOI' ? { ...item, label: 'Ho Chi Minh' } : item)),
    [rawLocations]
  );
  const roles = optionsQuery.data?.roles ?? [];
  const selectedLocation = locations.find((item) => item.value === location);

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <HeaderText>
            <Title>Setting</Title>
            <Subtitle>Where you work and what you do</Subtitle>
          </HeaderText>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </Header>

        <Field>
          <Label>YOUR NAME</Label>
          <ReadOnlyValue>{profile.name || '—'}</ReadOnlyValue>
          {/* PATCH /api/me 는 location / role / locale 만 받는다. 이름은 가입 때 정해진다. */}
          <FieldNote>Your name is set when you sign up and can't be changed here.</FieldNote>
        </Field>

        {optionsQuery.loading && <LoadingState compact label="Loading options…" />}
        {optionsQuery.error && !optionsQuery.data && (
          <ErrorState error={optionsQuery.error} onRetry={optionsQuery.reload} compact />
        )}

        {optionsQuery.data && (
          <>
            <Field>
              <Label>WHERE YOU WORK</Label>
              <ChipGrid>
                {locations.map((item) => (
                  <Chip
                    key={item.value}
                    type="button"
                    $active={location === item.value}
                    onClick={() => setLocation(item.value)}
                  >
                    {item.label ?? lookup(WORK_LOCATION_LABEL, item.value)}
                    <ChipMeta $active={location === item.value}>
                      {zoneOffsetLabel(item.timezone ?? lookup(LOCATION_ZONE, item.value))}
                    </ChipMeta>
                  </Chip>
                ))}
              </ChipGrid>
              {selectedLocation && (
                <OverlapNote>
                  The owner's working hours are{' '}
                  {String(selectedLocation.ownerHoursStart).slice(0, 5)}–
                  {String(selectedLocation.ownerHoursEnd).slice(0, 5)} on this clock. Overlap per
                  day: {selectedLocation.overlapHours} hour
                  {selectedLocation.overlapHours === 1 ? '' : 's'}.
                </OverlapNote>
              )}
            </Field>

            <Field>
              <Label>YOUR ROLE</Label>
              <ChipGrid>
                {roles.map((item) => (
                  <Chip
                    key={item.value}
                    type="button"
                    $active={role === item.value}
                    onClick={() => setRole(item.value)}
                  >
                    {item.label ?? lookup(JOB_ROLE_LABEL, item.value)}
                  </Chip>
                ))}
              </ChipGrid>
            </Field>
          </>
        )}

        <InlineError error={save.error} />

        <ButtonRow>
          <CancelButton type="button" onClick={onClose}>
            Cancel
          </CancelButton>
          <SaveButton type="button" onClick={handleSave} disabled={save.pending}>
            {save.pending ? 'Saving…' : 'Save'}
          </SaveButton>
        </ButtonRow>
      </Modal>
    </Overlay>
  );
}
