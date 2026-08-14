export const HANDBOOK_CATEGORIES = [
  {
    key: 'company',
    label: 'COMPANY',
    description: '가치·미션·커뮤니케이션·핸드북 운영',
    dotColor: '#111827',
    questions: [
      { id: 'company-1', text: '중요한 결정은 어디에 남기나요?', options: ['문서로 정리', '슬랙 스레드'] },
      { id: 'company-2', text: '회의는 언제 여나요?', options: ['사전 문서가 있을 때', '필요하면 바로'] },
      { id: 'company-3', text: '규칙을 바꿀 때 누가 승인하나요?', options: ['대표', '담당 팀'] },
    ],
  },
  {
    key: 'people',
    label: 'PEOPLE',
    description: '인사·채용·보상·학습',
    dotColor: '#2563EB',
    questions: [
      { id: 'people-1', text: '연차는 어떻게 쓰나요?', options: ['캘린더 등록만', '사전 승인 필요'] },
      { id: 'people-2', text: '채용은 어떤 절차로 진행하나요?', options: ['인터뷰만', '과제 + 인터뷰'] },
      { id: 'people-3', text: '보상은 언제 조정하나요?', options: ['연 1회', '반기 1회'] },
      { id: 'people-4', text: '학습·도서 비용은 어떻게 쓰나요?', options: ['한도 안에서 각자', '매번 승인'] },
    ],
  },
  {
    key: 'product-engineering',
    label: 'PRODUCT · ENGINEERING',
    description: '제품 원칙·개발 운영·고객지원',
    dotColor: '#334155',
    questions: [
      { id: 'product-1', text: '프로덕션 배포는 누가 실행하나요?', options: ['대표', '담당 개발자'] },
      { id: 'product-2', text: 'PR은 언제 머지할 수 있나요?', options: ['리뷰 1명 승인', '리뷰 2명 승인'] },
      { id: 'product-3', text: 'main 브랜치에 직접 푸시할 수 있나요?', options: ['안 됩니다', '긴급할 때만'] },
      { id: 'product-4', text: '제품 우선순위는 무엇으로 정하나요?', options: ['고객 요청 수', '대표 판단'] },
      { id: 'product-5', text: '고객 문의는 언제까지 1차 응답하나요?', options: ['당일 안에', '영업일 1일 안에'] },
    ],
  },
  {
    key: 'security',
    label: 'SECURITY',
    description: '보안 표준·보안 운영·위험 관리',
    dotColor: '#E0374A',
    questions: [
      { id: 'security-1', text: '프로덕션 DB는 어떻게 접근하나요?', options: ['담당자 입회 하에만', '권한 있으면 자유'] },
      { id: 'security-2', text: '외부 공유 링크는 어떻게 관리하나요?', options: ['만료일 필수', '제한 없음'] },
      { id: 'security-3', text: '보안 사고는 어떻게 보고하나요?', options: ['인지 즉시 대표에게', '정기 보고에 포함'] },
    ],
  },
];

export const PROJECT_QUESTION_TEMPLATE = [
  { id: 'proj-deploy', text: '이 프로젝트의 배포는 누가 하나요?', options: ['대표', '담당 개발자'] },
  { id: 'proj-pr', text: '이 프로젝트의 PR은 언제 머지되나요?', options: ['리뷰 1명 승인', '리뷰 2명 승인'] },
  { id: 'proj-branch', text: '이 프로젝트만의 브랜치 전략이 있나요?', options: ['없음, 회사 규칙과 동일', '별도 전략 있음'] },
  { id: 'proj-priority', text: '이 프로젝트의 우선순위는 무엇으로 정하나요?', options: ['고객 요청 수', '대표 판단'] },
];

export const EMPTY_ANSWER = { selected: null, customText: '', customSaved: false };

export function getQuestionStatus(answer) {
  if (!answer || answer.selected === null || answer.selected === undefined) return 'unconfirmed';
  if (answer.selected === 'undecided') return 'undecided';
  if (answer.selected === 'custom') return answer.customSaved ? 'confirmed' : 'drafting';
  return 'confirmed';
}

export function countConfirmed(questions, answers) {
  return questions.filter((q) => getQuestionStatus(answers[q.id]) === 'confirmed').length;
}

export const TOTAL_HANDBOOK_QUESTIONS = HANDBOOK_CATEGORIES.reduce(
  (sum, category) => sum + category.questions.length,
  0
);
