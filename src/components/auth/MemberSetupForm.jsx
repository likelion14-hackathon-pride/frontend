import { useMemo } from 'react';

import { LOCATION_ZONE, lookup } from '../../apis/constants';
import { zoneOffsetLabel } from '../../utils/time';
import TagSelect from './ui/TagSelect';

export default function MemberSetupForm({
  workLocation,
  setWorkLocation,
  jobRole,
  setJobRole,
  t, // 번역 객체
}) {
  // 오프셋은 하드코딩하지 않는다. 위치가 정하는 타임존(accounts/profile.py:LOCATION_ZONES)에서
  // 조회 시점 기준으로 계산해야 뉴욕처럼 서머타임을 쓰는 곳이 한 해의 절반 동안 틀리지 않는다.
  const locationOptions = useMemo(
    () =>
      t.workLocationOptions.map((option) => ({
        ...option,
        subLabel: zoneOffsetLabel(lookup(LOCATION_ZONE, option.value)),
      })),
    [t.workLocationOptions]
  );

  return (
    <>
      <TagSelect
        label={t.workLocationLabel}
        options={locationOptions}
        value={workLocation}
        onChange={setWorkLocation}
      />
      <TagSelect
        label={t.roleLabel}
        options={t.roleOptions}
        value={jobRole}
        onChange={setJobRole}
      />
    </>
  );
}
