import axiosInstance from "./axiosInstance";

const USE_MOCK = true;

const MOCK_DRAFTS = [
  {
    id: "d1",
    category: "company",
    title: "재택근무는 주 2회까지 가능합니다",
    body: "팀 합의에 따라 화/목요일 재택 가능. 사전에 매니저 승인 필요.",
    source: "Slack #general, 2025-03-11",
    quote: "재택은 화목만 가능한 걸로 정리하죠",
    sourceTag: "Slack",
    confidence: "high",
    scope: "company",
    projectId: null,
    status: "pending",
  },
  {
    id: "d2",
    category: "product",
    title: "배포는 매주 수요일 오후에 진행",
    body: "CI 통과 후 스테이징 QA 거쳐 수요일 15시 배포.",
    source: "GitHub README.md",
    quote: "deploys happen every Wednesday afternoon",
    sourceTag: "GitHub",
    confidence: "medium",
    scope: "company",
    projectId: null,
    status: "pending",
  },
  {
    id: "d3",
    category: "security",
    title: "고객 데이터는 절대 로컬에 다운로드 금지",
    body: "고객 관련 데이터는 사내 툴 내에서만 조회, 로컬 저장 금지.",
    source: "파일 업로드 - 보안정책.pdf",
    quote: "고객 데이터 로컬 다운로드 금지",
    sourceTag: "파일",
    confidence: "high",
    scope: "company",
    projectId: null,
    status: "pending",
  },
];

const MOCK_QUESTIONS = [
  { id: "q1", question: "휴가 신청은 누구에게 하나요?", done: false },
  {
    id: "q2",
    question: "신규 입사자 계정 발급은 누가 담당하나요?",
    done: false,
  },
];

// POST /handbook/extract
export const extractHandbook = async () => {
  if (USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          jobId: "mock-job-1",
          mode: "rich",
          drafts: MOCK_DRAFTS,
          questions: MOCK_QUESTIONS,
        });
      }, 800);
    });
  }
  const { data } = await axiosInstance.post("/handbook/extract");
  return data;
};

// PATCH /handbook/items/:id
export const updateHandbookItem = async (id, payload) => {
  if (USE_MOCK) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ item: { id, ...payload } }), 300),
    );
  }
  const { data } = await axiosInstance.patch(`/handbook/items/${id}`, payload);
  return data;
};

// POST /projects
export const createProject = async (name) => {
  if (USE_MOCK) {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve({ projectId: `mock-project-${Date.now()}`, name }),
        300,
      ),
    );
  }
  const { data } = await axiosInstance.post("/projects", { name });
  return data;
};
