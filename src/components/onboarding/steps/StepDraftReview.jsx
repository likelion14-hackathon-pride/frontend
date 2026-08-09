import { useEffect, useState } from "react";
import {
  extractHandbook,
  updateHandbookItem,
  createProject,
} from "../../../api/handbook";
import DraftItem from "./DraftItem";
import QuestionItem from "./QuestionItem";

const CATEGORIES = [
  {
    key: "company",
    nameKo: "회사 전반",
    nameEn: "Company",
    metaKo: "가치·미션·컬처·핸드북 운영",
    metaEn: "Values · mission · culture · handbook ops",
  },
  {
    key: "people",
    nameKo: "피플팀",
    nameEn: "People",
    metaKo: "인사·채용·다양성·보상·학습",
    metaEn: "HR · hiring · diversity · comp · learning",
  },
  {
    key: "product",
    nameKo: "제품 / 엔지니어링",
    nameEn: "Product / Engineering",
    metaKo: "제품 우선순위·개발 이슈·고객지원·오픈소스",
    metaEn: "Priorities · dev issues · support · open source",
  },
  {
    key: "security",
    nameKo: "보안",
    nameEn: "Security",
    metaKo: "보안 표준·접근 보안·사고 대응·위험 관리",
    metaEn: "Security standards · access · incidents · risk",
  },
];

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

          {(() => {
            const companyDrafts = drafts.filter((d) => d.scope === "company");
            const projectDrafts = drafts.filter((d) => d.scope === "project");
            const groups = CATEGORIES.map((cat) => ({
              ...cat,
              items: companyDrafts.filter((d) => d.category === cat.key),
            })).filter((group) => group.items.length > 0);

            const renderDraft = (draft) => (
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
                onScopeToCompany={() =>
                  patchDraft(draft.id, { scope: "company", projectId: null })
                }
                onCreateProject={handleCreateProject}
                lang={lang}
              />
            );

            return (
              <div className="space-y-7">
                {groups.map((group) => {
                  const pendingCount = group.items.filter(
                    (d) => d.status === "pending",
                  ).length;
                  return (
                    <div key={group.key} className="space-y-2.5">
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-[13px] font-extrabold tracking-tight flex-none">
                          {lang === "ko" ? group.nameKo : group.nameEn}
                        </span>
                        <span className="text-[11px] font-medium text-faint flex-none">
                          {lang === "ko" ? group.metaKo : group.metaEn}
                        </span>
                        <span className="flex-1 h-px bg-border" />
                        <span className="text-[10.5px] font-bold text-faint font-mono flex-none">
                          {pendingCount > 0
                            ? lang === "ko"
                              ? `${pendingCount}건 확인 필요`
                              : `${pendingCount} to review`
                            : lang === "ko"
                              ? `${group.items.length}건 확인 완료`
                              : `${group.items.length} confirmed`}
                        </span>
                      </div>
                      <div className="space-y-2.5">
                        {group.items.map(renderDraft)}
                      </div>
                    </div>
                  );
                })}

                <div className="space-y-2.5 ml-6 pl-5 border-l-2 border-border">
                  <div className="flex items-baseline gap-2.5 pt-1">
                    <span className="text-[10px] font-extrabold tracking-wide text-muted bg-[#EDEDF0] px-2.5 py-1 rounded-md flex-none">
                      {lang === "ko" ? "프로젝트" : "Project"}
                    </span>
                    <span className="text-[11px] font-medium text-faint flex-none">
                      {lang === "ko"
                        ? "회사 전반과 다르게 굴러가는 항목만 여기 내려옵니다"
                        : "Items that differ from the company-wide handbook"}
                    </span>
                    <span className="flex-1 h-px bg-border" />
                    <span className="text-[10.5px] font-bold text-faint font-mono flex-none">
                      {lang === "ko"
                        ? `${projectDrafts.length}건`
                        : `${projectDrafts.length} items`}
                    </span>
                  </div>
                  {projectDrafts.length > 0 ? (
                    <div className="space-y-2.5">
                      {projectDrafts.map(renderDraft)}
                    </div>
                  ) : (
                    <div className="bg-white border border-dashed border-[#E0E0E5] rounded-card px-5 py-4.5 text-[12px] text-muted leading-relaxed">
                      {lang === "ko"
                        ? "아직 프로젝트로 내려보낸 항목이 없어요. 회사 전반과 다르게 굴러가는 항목이 있다면 문항을 열어 '프로젝트로 내려보내기'를 눌러 주세요."
                        : "Nothing moved to a project yet. Open an item and use 'Move to project' for anything that differs from the company-wide rules."}
                    </div>
                  )}
                </div>
              </div>
            );
          })()}
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
