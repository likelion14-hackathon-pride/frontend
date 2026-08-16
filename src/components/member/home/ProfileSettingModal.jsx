import { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
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
  color: #8A8A93;
  margin-top: 3px;
`;

const CloseButton = styled.button`
  flex: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #F7F7F8;
  border: none;
  font-size: 15px;
  color: #6B6B73;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #17171B;
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
  color: #A0A0A8;
`;

const NameInput = styled.input`
  font-size: 15px;
  font-weight: 700;
  color: #17171B;
  background: #F7F7F8;
  border: 1px solid #EFEFF1;
  border-radius: 12px;
  padding: 12px 14px;
  outline: none;

  &:focus {
    border-color: #e3e3e3;
    box-shadow: 0 0 0 3px rgba(184, 182, 181, 0.12);
  }
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
  font-family: "IBM Plex Mono";
`;

const AddChip = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  border: 1px dashed #DADAE0;
  background: transparent;
  color: #B4B4BC;
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    border-color: #B4B4BC;
    color: #8A8A93;
  }
`;

const OverlapNote = styled.div`
  font-size: 12px;
  color: #A0A0A8;
  line-height: 1.5;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
`;

const RunSetupButton = styled.button`
  flex: none;
  font-size: 13px;
  font-weight: 700;
  color: #6B6B73;
  background: #F7F7F8;
  border: none;
  padding: 12px 16px;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 999px rgba(23, 23, 27, 0.045);
  }
`;

const SaveButton = styled.button`
  flex: 1;
  font-size: 13.5px;
  font-weight: 700;
  color: #fff;
  background: #17171B;
  border: none;
  padding: 12px 16px;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const LOCATIONS = [
  { id: 'hanoi', label: 'Hanoi', utc: 'UTC+7' },
  { id: 'hcm', label: 'Ho Chi Minh', utc: 'UTC+7' },
  { id: 'bangkok', label: 'Bangkok', utc: 'UTC+7' },
  { id: 'jakarta', label: 'Jakarta', utc: 'UTC+7' },
  { id: 'manila', label: 'Manila', utc: 'UTC+8' },
  { id: 'seoul', label: 'Seoul', utc: 'UTC+9' },
  { id: 'tokyo', label: 'Tokyo', utc: 'UTC+9' },
];

const ROLES = ['Backend', 'Frontend', 'Design', 'PM', 'QA', 'Data'];

export default function ProfileSettingModal({
  initialName = '',
  initialLocationId = 'hanoi',
  initialRole = 'Backend',
  onClose,
  onSave,
  onRunSetupAgain,
}) {
  const [name, setName] = useState(initialName);
  const [locationId, setLocationId] = useState(initialLocationId);
  const [role, setRole] = useState(initialRole);

  const selectedLocation = LOCATIONS.find((l) => l.id === locationId);

  function handleSave() {
    onSave?.({ name, locationId, role });
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <HeaderText>
            <Title>Setting</Title>
            <Subtitle>Name, location and role</Subtitle>
          </HeaderText>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </Header>

        <Field>
          <Label>YOUR NAME</Label>
          <NameInput value={name} onChange={(e) => setName(e.target.value)} />
        </Field>

        <Field>
          <Label>WHERE YOU WORK</Label>
          <ChipGrid>
            {LOCATIONS.map((loc) => (
                <Chip key={loc.id} $active={locationId === loc.id} onClick={() => setLocationId(loc.id)}>
                    {loc.label}
                <ChipMeta $active={locationId === loc.id}>{loc.utc}</ChipMeta>
                </Chip>
            ))}
            <AddChip onClick={() => {}}>+</AddChip>
          </ChipGrid>
          {selectedLocation && (
            <OverlapNote>
              Seoul is 2h ahead. Overlap with owner hours 09:00–18:00 KST is 07:00–16:00 your time.
            </OverlapNote>
          )}
        </Field>

        <Field>
          <Label>YOUR ROLE</Label>
          <ChipGrid>
            {ROLES.map((r) => (
              <Chip key={r} $active={role === r} onClick={() => setRole(r)}>
                {r}
              </Chip>
            ))}
            <AddChip onClick={() => {}}>+</AddChip>
          </ChipGrid>
        </Field>

        <ButtonRow>
          <RunSetupButton onClick={onRunSetupAgain}>Run setup again</RunSetupButton>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </ButtonRow>
      </Modal>
    </Overlay>
  );
}