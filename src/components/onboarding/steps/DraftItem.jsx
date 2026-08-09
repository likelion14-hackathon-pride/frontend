import { useState } from "react";
import ProjectPicker from "./ProjectPicker";

const STATUS_DOT = {
  pending: "#F5872B",
  ok: "#2E7D5B",
  no: "#D9A7A4",
  hold: "#B4B4BC",
};
const STATUS_LABEL = {
  pending: { ko: "확인 필요", en: "Needs review" },
  ok: { ko: "확인함", en: "Confirmed" },
  no: { ko: "아님", en: "Not applicable" },
  hold: { ko: "보류", en: "On hold" },
};
const SOURCE_TAG_STYLE = {
  GitHub: { bg: "#EEF1F7", text: "#4A5A7A" },
  Slack: { bg: "#F3ECF7", text: "#6B4A8A" },
  파일: { bg: "#F2F2F4", text: "#6B6B73" },
};

const scopeChipClass = (active) =>
  `flex-none whitespace-nowrap px-3 py-1.5 rounded-full text-[11px] font-bold transition ${
    active ? "bg-ink text-white" : "bg-[#F2F2F4] text-muted"
  }`;

const DraftItem = ({
  draft,
  isOpen,
  onToggle,
  onConclude,
  onSaveEdit,
  projects,
  onAssignProject,
  onCreateProject,
  onScopeToCompany,
  lang,
}) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(draft.title);
  const [body, setBody] = useState(draft.body);
  const [showProjectPicker, setShowProjectPicker] = useState(false);
  const tagStyle =
    SOURCE_TAG_STYLE[draft.sourceTag] || SOURCE_TAG_STYLE["파일"];
  const isProjectScoped = draft.scope === "project";
  const projectName = isProjectScoped
    ? projects.find((p) => p.projectId === draft.projectId)?.name
    : null;

  return (
    <div className="bg-white rounded-card border border-[#EFEFF1]">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`draft-panel-${draft.id}`}
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-4 py-3.5 text-left"
      >
        <span
          className="w-2 h-2 rounded-full flex-none"
          style={{ backgroundColor: STATUS_DOT[draft.status] }}
          aria-hidden="true"
        />
        {isProjectScoped && (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-none bg-[#EDEDF0] text-muted">
            {projectName || (lang === "ko" ? "이름 미정" : "Untitled")}
          </span>
        )}
        <span className="flex-1 text-[13px] font-bold line-clamp-2">
          {draft.title}
        </span>
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-none"
          style={{ backgroundColor: tagStyle.bg, color: tagStyle.text }}
        >
          {draft.sourceTag}
        </span>
        <span className="text-[10.5px] font-bold text-muted flex-none">
          {STATUS_LABEL[draft.status][lang]}
        </span>
      </button>

      {isOpen && (
        <div
          id={`draft-panel-${draft.id}`}
          role="region"
          className="px-4 pb-4 border-t border-[#EFEFF1] pt-3.5"
        >
          {editing ? (
            <div className="space-y-2.5">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-border rounded-input px-3 py-2 text-sm bg-field outline-none focus:border-accent"
              />
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={3}
                className="w-full border border-border rounded-input px-3 py-2 text-sm bg-field outline-none focus:border-accent"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onSaveEdit(title, body);
                    setEditing(false);
                  }}
                  className="bg-accent text-white rounded-cta px-3.5 py-2 text-[12px] font-bold"
                >
                  {lang === "ko" ? "저장" : "Save"}
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="text-[12px] font-bold text-muted"
                >
                  {lang === "ko" ? "취소" : "Cancel"}
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="text-[12.5px] text-body leading-relaxed">
                {draft.body}
              </p>
              <p className="text-[10.5px] text-muted mt-2 italic">
                "{draft.quote}" — {draft.source}
              </p>
              <div className="flex flex-wrap gap-2 mt-3.5">
                <button
                  type="button"
                  onClick={() => onConclude("ok")}
                  className="px-3 py-1.5 rounded-input bg-[#E8F3EC] text-[#2E7D5B] text-[11.5px] font-bold"
                >
                  {lang === "ko" ? "확인" : "Confirm"}
                </button>
                <button
                  type="button"
                  onClick={() => onConclude("no")}
                  className="px-3 py-1.5 rounded-input bg-[#F2F2F4] text-[#6B6B73] text-[11.5px] font-bold"
                >
                  {lang === "ko" ? "아님" : "Not applicable"}
                </button>
                <button
                  type="button"
                  onClick={() => onConclude("hold")}
                  className="px-3 py-1.5 rounded-input bg-[#F2F2F4] text-[#6B6B73] text-[11.5px] font-bold"
                >
                  {lang === "ko" ? "보류" : "Hold"}
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(true)}
                  className="px-3 py-1.5 rounded-input bg-[#F2F2F4] text-[#6B6B73] text-[11.5px] font-bold"
                >
                  {lang === "ko" ? "수정" : "Edit"}
                </button>
              </div>

              <div className="flex items-center gap-2 flex-wrap mt-3">
                <span className="text-[10px] font-bold text-faint tracking-wide flex-none">
                  {lang === "ko" ? "적용 범위" : "Scope"}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setShowProjectPicker(false);
                    onScopeToCompany();
                  }}
                  className={scopeChipClass(!isProjectScoped)}
                >
                  {lang === "ko" ? "회사 전체" : "Company-wide"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowProjectPicker((v) => !v)}
                  className={scopeChipClass(isProjectScoped)}
                >
                  {isProjectScoped
                    ? projectName || (lang === "ko" ? "프로젝트 선택" : "Choose project")
                    : lang === "ko"
                      ? "프로젝트로 내려보내기"
                      : "Move to project"}
                </button>
              </div>

              {(showProjectPicker || isProjectScoped) && (
                <ProjectPicker
                  projects={projects}
                  selectedProjectId={draft.projectId}
                  onSelect={(projectId) => {
                    onAssignProject(projectId);
                    setShowProjectPicker(false);
                  }}
                  onCreate={async (name) => {
                    const project = await onCreateProject(name);
                    onAssignProject(project.projectId);
                    setShowProjectPicker(false);
                  }}
                  lang={lang}
                />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DraftItem;
