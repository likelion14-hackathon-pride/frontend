import TagSelect from './ui/TagSelect';

export default function MemberSetupForm({
  workLocation,
  setWorkLocation,
  jobRole,
  setJobRole,
  t, // 번역 객체
}) {
  return (
    <>
      <TagSelect
        label={t.workLocationLabel}
        options={t.workLocationOptions}
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
