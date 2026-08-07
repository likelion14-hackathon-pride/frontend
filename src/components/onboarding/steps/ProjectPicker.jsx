import { useState } from "react";

const ProjectPicker = ({
  projects,
  selectedProjectId,
  onSelect,
  onCreate,
  lang,
}) => {
  const [newName, setNewName] = useState("");

  return (
    <div className="mt-3 bg-canvas rounded-xl p-3">
      {projects.length === 0 ? (
        <p className="text-[11px] text-muted mb-2">
          {lang === "ko"
            ? "아직 만들어진 프로젝트가 없어요. 새로 만들어보세요."
            : "No projects yet — create one below."}
        </p>
      ) : (
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {projects.map((p) => (
            <button
              key={p.projectId}
              type="button"
              onClick={() => onSelect(p.projectId)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition ${
                selectedProjectId === p.projectId
                  ? "bg-ink text-white"
                  : "bg-[#F2F2F4] text-muted"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      )}
      <div className="flex gap-1.5">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder={lang === "ko" ? "새 프로젝트 이름" : "New project name"}
          className="flex-1 border border-border rounded-input px-3 py-1.5 text-[12px] bg-white outline-none focus:border-accent"
        />
        <button
          type="button"
          disabled={!newName.trim()}
          onClick={() => {
            onCreate(newName.trim());
            setNewName("");
          }}
          className="bg-accent text-white rounded-input px-3 py-1.5 text-[11.5px] font-bold disabled:opacity-40"
        >
          {lang === "ko" ? "프로젝트 만들기" : "Create"}
        </button>
      </div>
    </div>
  );
};

export default ProjectPicker;
