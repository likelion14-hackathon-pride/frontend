import { useEffect, useState } from "react";
import {
  extractHandbook,
  updateHandbookItem,
  createProject,
} from "../../../api/handbook";
import DraftItem from "./DraftItem";
import QuestionItem from "./QuestionItem";

const StepDraftReview = ({ headingRef, onNext, lang }) => {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("rich");
  const [drafts, setDrafts] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [projects, setProjects] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [openQId, setOpenQId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    extractHandbook().then((result) => {
      if (cancelled) return;
      setMode(result.mode);
      setDrafts(result.drafts);
      setQuestions(result.questions);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const okCount = drafts.filter((d) => d.status === "ok").length;
  const total = drafts.length;
  const progressPct = total === 0 ? 0 : Math.round((okCount / total) * 100);

  const patchDraft = async (id, payload) => {
    setDrafts((prev) =>
      prev.map((d) => (d.id === id ? { ...d, ...payload } : d)),
    ); // 낙관적 업데이트
    // TODO: 실제 API 연동 시 실패하면 여기서 이전 값으로 롤백 + 해당 행 토스트 (스펙 5번)
    await updateHandbookItem(id, payload);
  };

  const handleAllOk = () => {
    drafts
      .filter((d) => d.status === "pending")
      .forEach((d) => patchDraft(d.id, { status: "ok" }));
  };

  const handleCreateProject = async (name) => {
    const project = await createProject(name);
    setProjects((prev) => [...prev, project]);
    return project;
  };

  if (loading) {
    return (
      <div className="max-w-[1080px] mx-auto px-4 md:px-0 py-10">
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="text-[18px] font-extrabold outline-none"
        >
          {lang === "ko" ? "핸드북 초안 확인" : "Review handbook draft"}
        </h2>
        <p className="text-[12.5px] text-muted mt-4">
          {lang === "ko" ? "초안을 추출하는 중…" : "Extracting draft…"}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[1080px] mx-auto px-4 md:px-0 py-10">
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-[18px] font-extrabold outline-none"
      >
        {lang === "ko" ? "핸드북 초안 확인" : "Review handbook draft"}
      </h2>

      {mode === "rich" ? (
        <>
          <div className="mt-4 mb-2 flex items-center justify-between">
            <span className="text-[12.5px] font-bold text-muted">
              {okCount} / {total} {lang === "ko" ? "확인함" : "confirmed"}
            </span>
            {drafts.some((d) => d.status === "pending") && (
              <button
                type="button"
                onClick={handleAllOk}
                className="text-[11.5px] font-bold text-accent hover:underline"
              >
                {lang === "ko" ? "모두 맞습니다" : "Confirm all"}
              </button>
            )}
          </div>
          <div
            role="progressbar"
            aria-valuenow={progressPct}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-1.5 bg-[#EFEFF1] rounded-full overflow-hidden mb-6"
          >
            <div
              className="h-full bg-accent transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <div className="space-y-2.5">
            {drafts.map((draft) => (
              <DraftItem
                key={draft.id}
                draft={draft}
                isOpen={openId === draft.id}
                onToggle={() =>
                  setOpenId(openId === draft.id ? null : draft.id)
                }
                onConclude={(status) => {
                  patchDraft(draft.id, { status });
                  setOpenId(null);
                }}
                onSaveEdit={(title, body) => {
                  patchDraft(draft.id, {
                    title,
                    body,
                    status: "ok",
                    source: lang === "ko" ? "대표 수정" : "Edited by owner",
                  });
                  setOpenId(null);
                }}
                projects={projects}
                onAssignProject={(projectId) =>
                  patchDraft(draft.id, { scope: "project", projectId })
                }
                onCreateProject={handleCreateProject}
                lang={lang}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-2.5 mt-4">
          {questions.map((q) => (
            <QuestionItem
              key={q.id}
              question={q}
              isOpen={openQId === q.id}
              onToggle={() => setOpenQId(openQId === q.id ? null : q.id)}
              onSave={(answer) => {
                setQuestions((prev) =>
                  prev.map((item) =>
                    item.id === q.id ? { ...item, done: true, answer } : item,
                  ),
                );
                setOpenQId(null);
              }}
              lang={lang}
            />
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={onNext}
        className="mt-8 bg-accent text-white rounded-cta px-4 py-2.5 text-[13px] font-bold"
      >
        {lang === "ko" ? "다음 단계로" : "Next step"}
      </button>
    </div>
  );
};

export default StepDraftReview;
