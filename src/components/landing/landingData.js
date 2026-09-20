// 랜딩 페이지 카피 및 데모 데이터. 문구 수정은 이 파일에서만 하면 된다.

export const CTA = { label: '체험하러 가기', href: '/login' };

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'handbook', label: 'Handbook' },
  { id: 'why', label: 'Features' },
  { id: 'bm', label: 'BM' },
];

/** 스크롤 위치 → 활성 네비 매핑 */
export const NAV_MARKS = [
  { id: 'top', view: 'home' },
  { id: 'handbook-intro', view: 'handbook' },
  { id: 'build', view: 'handbook' },
  { id: 'faq', view: 'home' },
  { id: 'why', view: 'why' },
  { id: 'bm', view: 'bm' },
];

export const HERO = {
  eyebrow: '묻기 막막한 외국인 팀원, 모든 질문에 대답할 여력이 없는 대표님',
  titleLead: '하나로',
  titleTail: '모두가 편안해집니다',
  body: [
    '매일 쏟아지는 질문과 시차로 인한 병목 현상.',
    '이제 SAi가 중간에서 든든한 AI 사수 역할을 맡아,',
    '양쪽 모두 시간, 감정 낭비 없이 자신의 업무에만 집중하게 만듭니다.',
  ],
};

/** 히어로 챗 데모 — "Asking about" 칩 하나당 항목 하나 */
export const ASK_SCOPES = [
  {
    chip: 'Company-wide',
    path: 'Product / Engineering',
    thought: 'CORS 설정을 바꿨는데 왜 반영이 안 되지..?\n이런 걸 물어봐도 괜찮을까?',
    question: 'CORS 설정을 바꿨는데 반영이 안 돼요',
    answer: 'CORS, CSRF, ALLOWED_HOSTS 같은 웹 API 설정 변경은 gunicorn 재시작으로 반영합니다.',
  },
  {
    chip: 'Ai-meeting-notes',
    path: 'Ai-meeting-notes',
    thought: '회의록 Summary에 할 일까지 다 적는 게 맞나..? 기준이 있었던 것 같은데 뭐였더라..',
    question: '회의록 Summary는 어디까지 적어야 하나요?',
    answer: 'Summary는 짧게 쓰고, 실행 항목은 Action Items로 분리합니다.',
  },
  {
    chip: 'Ai-cs-copilot',
    path: 'Ai-cs-copilot',
    thought: '면접 모드 답변은 얼마나 길게 써야 하지..? 예전에 들은 것 같은데.',
    question: '면접 모드 답변은 얼마나 길게 써야 하나요?',
    answer: '면접 모드는 1분 답변과 학습용 상세 설명을 분리합니다.',
  },
];

/** 히어로 챗 루프: 생각 → 질문 → 타이핑 → 답변 → 리셋, 누적 타이밍(ms) */
export const CHAT_CUES = [480, 1380, 1960, 2560, 5600];

export const OWNER_DM = [
  { text: '응우옌님, ', mark: '결제 API 테스트 서버에 배포', tail: ' 부탁드려요.' },
  { text: '매뉴얼은 ', mark: '사내 위키', tail: '에 있습니다.' },
  { text: '', mark: '가능하면 오늘 중으로', tail: ' 부탁합니다!' },
];

export const WORKER_DOUBTS = [
  '내가 그냥 머지해도 되나? 코드 리뷰나 승인 없이?',
  '위키 주소..? 언제 알려주셨지? 나만 못 찾고 있나?',
  '못 찾겠다고 다시 물어보면 답답해하시겠지..?',
  "'오늘 중'이면 한국 시간 기준인가? 여기 시간인가?",
];

export const WALL_CARDS = [
  {
    id: 'time',
    title: '시차의 벽',
    desc: '시차가 9시간 차이나는 곳과는',
    bold: '근무시간이 전혀 겹치지 않습니다.',
  },
  {
    id: 'hesit',
    title: '망설임의 벽',
    desc: '사소한 질문 같아서, 귀찮게 여길까 두려워',
    bold: '결국 질문하지 않습니다.',
  },
  {
    id: 'mentor',
    title: '사수의 부재',
    desc: '원격으로 일하는 외국인 근로자에게는',
    bold: '사수가 없습니다.',
  },
];

export const HOW_STEPS = [
  {
    id: 'collect',
    tag: 'STEP 1',
    title: '모은다',
    desc: 'GitHub · Slack · 로컬 파일에 흩어진 결정과 규칙을 읽어 핸드북으로 정리합니다.',
    chips: ['#dev-general', 'CONTRIBUTING.md', '사내규정.pdf'],
  },
  {
    id: 'translate',
    tag: 'STEP 2',
    title: '풀어준다',
    desc: '지시가 도착하면 핸드북 위에서 해석해, 무엇을 해야 하고 이 팀에서는 어떻게 하는지를 함께 보여줍니다.',
    example: {
      title: '결제 실패 원인 조사',
      body: '에러 로그는 Sentry에서 먼저 보세요\n배포는 대표가 실행 하고 수정은 PR까지 합니다',
    },
  },
  {
    id: 'ask',
    tag: 'STEP 3',
    title: '물어본다',
    desc: '모르면 망설일 필요없이, SAi에게 바로 물어봅니다.',
    chat: {
      q: '이 API 키는 어디서 발급받아요?',
      a: '핸드북 기준, .env.example 참고 — 담당자 김대표',
    },
  },
  {
    id: 'accum',
    tag: 'STEP 4',
    title: '쌓인다',
    desc: '주고받은 대화는 다시 핸드북에 기록됩니다. 다만 모든 내용이 규칙이 되지는 않습니다.\n\n세 갈래로 나뉘어, 승인된 것만 핸드북에 남습니다.',
    routes: ['자동 승격', '일괄 검토', '개별 검토'],
  },
];

export const HANDBOOK_FACETS = [
  {
    kicker: 'WHAT',
    title: '우리 팀만의 업무 규칙',
    desc: '단순한 질의응답을 넘어, 슬랙 대화나 파편화된 문서들에 숨어있는 사내 규칙과 지식을 하나로 모아 기록합니다.',
  },
  {
    kicker: 'WHO',
    title: '문서 작성은 SAi가 알아서',
    desc: "대표님이 문서를 쓸 필요 없습니다. SAi가 만든 초안에 '거절/승인'만 선택하세요.",
  },
  {
    kicker: 'WHY',
    title: '반복된 질문의 자동 규칙화',
    desc: '자동 승격 요건을 갖춘 사항은 SAi가 이를 룰로 인식해 핸드북에 자동 저장합니다. 이후부터는 대표님 개입 없이 즉시 자동 답변됩니다.',
  },
];

export const HANDBOOK_PROJECTS = [
  { name: 'Ai-meeting-notes', accent: true },
  { name: 'Ai-cs-copilot', accent: false },
];

export const ONB_STEPS = [
  {
    id: 'sources',
    tab: '소스 연결',
    title: '팀의 업무 도구를 연결하고 흩어져 있는 기준을 긁어옵니다',
    desc: 'GitHub·Slack 연결 및 로컬 파일 업로드',
    mock: 'Onboarding / Step 1 — 소스 연결',
  },
  {
    id: 'rules',
    tab: '기본 규칙',
    title: '고정 질문에 답하면 핸드북 기반이 됩니다',
    desc: '도구에서의 추출에만 의존한 핸드북은 허술할 가능성이 높음',
    mock: 'Onboarding / Step 2 — 기본 규칙',
  },
  {
    id: 'risk',
    tab: '위험 작업 등록',
    title: '대표 확인 없이 지나가면 안 되는 단어를 걸어 둡니다',
    desc: '팀원이 SAi에게 질문했을 때, 반드시 대표님에게 질문하도록 안내하는 위험 작업 키워드를 설정',
    mock: 'Onboarding / Step 3 — 위험 작업 등록',
  },
  {
    id: 'done',
    tab: '완료',
    title: '회사 코드를 넘기면 팀원이 합류합니다',
    desc: '대표님이 해야하는 설정 완료',
    mock: 'Onboarding / Step 4 — 완료',
  },
];

export const PROMOTION_ROUTES = [
  {
    no: '01',
    lane: '확실한\n규칙',
    title: '자동 승격',
    badge: '즉시 등록',
    desc: '이미 세 번 이상 같은 답이 나왔고, 충돌도 없는 항목. 근거를 붙여 바로 핸드북에 등록됩니다.',
    chips: ['3회 이상 반복된 답변', '30일 내 실제 사용', '기존 규칙과 충돌 없음'],
    theme: {
      lane: '#1D4ED8',
      cardBg: '#F5F8FF',
      cardBorder: 'rgba(29,78,216,0.18)',
      badge: '#1D4ED8',
      chipColor: '#1D4ED8',
      chipBg: '#E8EEFC',
      chipBorder: 'rgba(29,78,216,0.16)',
      indent: null,
      titleSize: 23,
    },
  },
  {
    no: '02',
    lane: '묶어서\n확인',
    title: '일괄 검토',
    badge: '한 화면에서 한 번에 승인',
    desc: '규칙이 될 가능성은 있지만 아직 확실하지 않은 항목. 모아서 훑어보고 승인합니다.',
    chips: ['반복 횟수가 아직 부족함', '적용 범위가 애매함', '표현만 다듬으면 되는 항목'],
    theme: {
      lane: '#A79E92',
      cardBg: '#FBF9F6',
      cardBorder: 'rgba(23,23,27,0.10)',
      badge: '#7A7266',
      chipColor: '#7A7266',
      chipBg: '#F1ECE5',
      chipBorder: 'rgba(23,23,27,0.09)',
      indent: 'clamp(0px,4vw,56px)',
      titleSize: 21,
    },
  },
  {
    no: '03',
    lane: '건별\n1건씩',
    title: '개별 검토',
    badge: '대표가 직접 판단',
    desc: '틀리면 손해가 남는 항목. 자동으로 올리지 않고 한 건씩 사람이 확인합니다.',
    chips: ['기존 규칙과 충돌', '보안 · 결제 · 인사 영역', '출처를 찾을 수 없음'],
    theme: {
      lane: '#E96D00',
      cardBg: '#FFF7EF',
      cardBorder: 'rgba(233,109,0,0.26)',
      badge: '#C25A00',
      chipColor: '#C25A00',
      chipBg: '#FFF1E4',
      chipBorder: 'rgba(233,109,0,0.2)',
      indent: 'clamp(0px,8vw,112px)',
      titleSize: 21,
    },
  },
];

/** 스크롤 구동 기능 스테이지: 팀원 화면 5개 + 대표 화면 5개 */
export const SECTION_DATA = [
  {
    group: 'team',
    tag: 'HOME',
    title: '오늘 무엇부터 할지, 로그인하자마자 보입니다',
    desc: '밀린 지시, 오늘의 할 일, 팀원의 근무 상태를 한 화면에서 확인합니다.',
    mock: { kind: 'img', src: 'why-home', alt: 'SAi Home 화면' },
  },
  {
    group: 'team',
    tag: 'TASKS',
    title: '막힌 질문은 쌓아두지 않고 바로 던집니다',
    desc: '프로젝트별 작업을 상태로 나눠 보고, 궁금한 점은 곧장 SAi에게 물어봅니다.',
    mock: { kind: 'img', src: 'why-tasks', alt: 'SAi Tasks 화면' },
  },
  {
    group: 'team',
    tag: 'ASK SAI',
    title: '사람을 기다리는 대신, SAi에게 먼저 묻습니다',
    desc: '망설였던, 사람을 기다려야했던 질문들을 SAi에게는 바로 물어봅니다.',
    mock: { kind: 'img', src: 'why-ask', alt: 'SAi 질문 화면' },
  },
  {
    group: 'team',
    tag: 'HANDBOOK',
    title: '이미 쌓인 기록이, 그대로 규칙이 됩니다',
    desc: '회사 규칙, 프로젝트 지식 두 계층으로 나뉜 핸드북이 만들어집니다.',
    mock: { kind: 'img', src: 'why-handbook', alt: 'SAi Handbook 화면' },
  },
  {
    group: 'team',
    tag: 'PROJECT',
    title: '프로젝트 지식은, 프로젝트 안에서 쌓입니다',
    desc: '회사 규칙과 분리된 프로젝트 지식 계층에서, 그 프로젝트에만 필요한 기준을 따로 봅니다.',
    mock: { kind: 'comp', comp: 'project', width: 1372, ratio: 1372 / 956 },
  },
  {
    group: 'ceo',
    tag: 'DASHBOARD',
    title: '열어보면, 오늘 볼 것만 남아 있습니다',
    desc: '이번 주 질문 중 SAi가 답한 건과 대표님 판단이 필요한 건이 나뉘어 있습니다. 대표님은 남은 것만 보면 됩니다.',
    mock: { kind: 'comp', comp: 'dash', width: 1312, ratio: 1312 / 791 },
  },
  {
    group: 'ceo',
    tag: 'SOURCES',
    title: '팀이 이미 쓰는 도구에서 저절로 모입니다',
    desc: 'Slack 채널과 GitHub 저장소를 연결해두면, 새 문서를 쓰지 않아도 핸드북이 채워집니다.',
    mock: { kind: 'comp', comp: 'sources', width: 1312, ratio: 1312 / 530 },
  },
  {
    group: 'ceo',
    tag: 'QUESTIONS',
    title: '답해야 할 질문만, 한 곳에 모입니다',
    desc: 'SAi가 답하지 못한 질문만 올라옵니다. 대표님이 남긴 답변 한 줄이 그대로 핸드북 한 항목이 됩니다.',
    mock: { kind: 'comp', comp: 'questions', width: 1312, ratio: 1312 / 703 },
  },
  {
    group: 'ceo',
    tag: 'HANDBOOK',
    title: '설명은 한 번, 규칙은 계속 남습니다',
    desc: '한 번 승인한 답변은 핸드북 항목이 되어 다음부터 SAi가 대신 답합니다. 같은 설명을 두 번 할 일이 없습니다.',
    mock: { kind: 'comp', comp: 'handbook', width: 1312, ratio: 1312 / 804 },
  },
  {
    group: 'ceo',
    tag: 'SETTINGS',
    title: '한 번 정해두면, 자리를 비워도 굴러갑니다',
    desc: '위험 작업 키워드와 근무 시간만 등록해두면, 팀원 화면에 사전 안내와 대기 안내가 자동으로 표시됩니다.',
    mock: { kind: 'comp', comp: 'settings', width: 1388, ratio: 1388 / 461 },
  },
];

export const MARKET_ROWS = [
  {
    key: 'TAM',
    value: '39조',
    desc: '글로벌 팀 협업 소프트웨어 시장 (278.9억 달러 × 1,400원)',
    accent: false,
  },
  {
    key: 'SAM',
    value: '7,600억',
    desc: 'APAC IT·Tech 중소기업 협업 시장 (APAC 시장 × SME 비중 × IT·Tech 비중)',
    accent: false,
  },
  {
    key: 'SOM',
    value: '5.4억',
    desc: '3년 내 확보 목표 고객 시장 (300개사 × 연 180만 원)',
    accent: true,
  },
];

export const PRICING_PLANS = ['Starter', 'Team', 'Enterprise'];

export const PRICING_ROWS = [
  { label: '이용 규모', cells: ['최대 5인 기준', '최대 20인 기준', '전사 단위'] },
  {
    label: '월 구독료',
    strong: true,
    cells: ['90,000원', '190,000원', '별도 견적*'],
  },
  {
    label: '도입 가치',
    cells: [
      '인재 1명 인건비 10% 미만',
      '인당 9,500원 · 협업 툴보다 저렴',
      '보안 · 데이터 맞춤 구축',
    ],
  },
];

export const FAQS = [
  {
    q: '기존 문서를 다시 정리해야 하나요?',
    a: '아니요. Slack·GitHub·로컬 파일에 이미 있는 기록을 그대로 읽어 첫 핸드북을 만듭니다. 정리는 SAi가 하고, 대표는 검수만 합니다.',
  },
  {
    q: '틀린 답을 하면 어떻게 알 수 있나요?',
    a: '모든 문장에 출처가 붙습니다. 근거가 없으면 답하지 않고 대표에게 질문하도록 안내합니다. 출처를 눌러 원본 메시지나 파일로 바로 이동할 수 있습니다.',
  },
  {
    q: '보안이 걱정됩니다.',
    a: '연결한 채널과 저장소의 범위 안에서만 읽습니다. 읽기 권한은 워크스페이스 단위로 제한할 수 있고, 민감 채널은 제외할 수 있습니다.',
  },
  {
    q: '도입에 얼마나 걸리나요?',
    a: 'Slack과 GitHub 연결에 약 10분. 초기 핸드북은 고정 질문지에 답을 하면 생성되며, 이후 연결된 소스에서 내용을 추출하며 두꺼워집니다.',
  },
];

export const FOOTER_LINKS = {
  product: [
    { label: 'Home', view: 'home' },
    { label: 'Handbook', view: 'handbook' },
    { label: 'Features', view: 'why' },
    { label: 'BM', view: 'bm' },
  ],
  company: [
    { label: '개인정보처리방침', legal: 'privacy' },
    { label: '이용약관', legal: 'terms' },
    { label: '체험하러 가기', href: CTA.href },
  ],
};
