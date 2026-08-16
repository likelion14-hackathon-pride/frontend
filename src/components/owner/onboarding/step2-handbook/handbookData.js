export const HANDBOOK_CATEGORIES = [
  {
    key: 'direction-culture',
    label: 'DIRECTION · CULTURE',
    description: '방향과 문화·비전·우선순위·장애 대응',
    dotColor: '#17171B',
    questions: [
      {
        id: 'dc-1',
        text: '우리 회사가 궁극적으로 해결하려는 고객의 핵심 문제는 무엇인가요?',
        options: [],
      },
      {
        id: 'dc-2',
        text: '현재 우리 회사가 당면한 가장 중요한 비즈니스 목표는?',
        options: [
          '초기 지표 달성 (신속한 기능 배포 및 매출 확보)',
          '시스템 안정성 확보 (장기적 관점의 아키텍처 구축)',
        ],
      },
      {
        id: 'dc-3',
        text: '일정(마감)과 코드 퀄리티가 충돌할 때 무엇을 우선하나요?',
        options: [
          '기술 부채를 감수하더라도 기한 내 배포 우선',
          '기한이 지연되더라도 코드 품질 및 원칙 준수 우선',
        ],
      },
      {
        id: 'dc-4',
        text: '직원이 실수로 서버를 다운시키거나 DB를 날렸을 때 대처 방식은?',
        options: [
          '즉시 공개 소통 채널에 서면으로 전체 상황 공유',
          '책임자(대표/테크리드)에게 개별 메시지로 선보고',
        ],
      },
    ],
  },
  {
    key: 'communication',
    label: 'COMMUNICATION',
    description: '소통 매체와 리듬·스탠드업·응답·부재',
    dotColor: '#2563EB',
    questions: [
      {
        id: 'comm-1',
        text: '팀의 데일리 진행 상황 공유 방식은?',
        options: [
          '자동화 봇을 활용하여 매일 지정된 양식으로 서면 제출',
          '별도 보고 없이 이슈 관리 도구(Jira/Github) 업데이트로 대체',
        ],
      },
      {
        id: 'comm-2',
        text: '시차를 고려했을 때, 슬랙 응답을 보장해야 하는 시간은?',
        options: [
          '지정된 코어 타임(예: 14시~18시)에는 실시간 응답 대기 필수',
          '100% 비동기 업무 (코어 타임 없이 24시간 이내 응답 보장)',
        ],
      },
      {
        id: 'comm-3',
        text: '치명적인 장애(P0) 발생 시 원격 근무자에게 연락하는 방식은?',
        options: [
          '슬랙 등 업무 채널 전체 멘션 및 에러 로그 즉각 공유',
          '자동화된 긴급 알림 시스템(PagerDuty 등) 작동',
        ],
      },
      {
        id: 'comm-4',
        text: '문제(Blocker)를 설명하기 전, 기대하는 행동은?',
        options: [
          '최소 1시간 원인 분석 및 자체 시도 내역 정리 후 질문',
          '문제 발생 즉시 에러 로그를 첨부하여 바로 질문',
        ],
      },
      {
        id: 'comm-5',
        text: '연차나 병가 등으로 자리를 비워야 할 때 룰은?',
        options: [
          '최소 1주 전 전사 채널 공지 및 서면 인수인계서 작성 필수',
          '당일이라도 책임자의 사전 서면 승인 획득 시 사용 가능',
        ],
      },
    ],
  },
  {
    key: 'dev-flow-async',
    label: 'DEV FLOW · ASYNC',
    description: '개발 흐름·착수·완료기준·지연보고',
    dotColor: '#7C8AA6',
    questions: [
      {
        id: 'dev-1',
        text: '텍스트로 된 지라/이슈 티켓을 받으면 바로 코딩을 시작하나요?',
        options: [
          '소통 채널에 간략한 구현 방향성을 서면 공유 후 즉각 착수',
          '상세 구현 계획을 문서로 작성하고 책임자 리뷰 승인 후 착수',
        ],
      },
      {
        id: 'dev-2',
        text: '우리 팀에서 "그 일 다 끝났습니다(Done)"의 기준은 어디인가요?',
        options: [
          '로컬 환경 테스트 완료 및 PR(Pull Request) 생성 시점',
          '코드 리뷰 통과 및 메인(Main) 브랜치 병합 완료 시점',
          '운영(Production) 서버 배포 및 정상 작동 확인 시점',
        ],
      },
      {
        id: 'dev-3',
        text: '약속된 마감일보다 작업이 밀릴 것 같을 때 언제 알리나요?',
        options: [
          '지연 예상 즉시 소통 채널에 사유와 함께 서면 보고',
          '지정된 정기 업무 보고(데일리 스탠드업 등) 시간에 공유',
        ],
      },
      {
        id: 'dev-4',
        text: 'AI 코딩 어시스턴트(ChatGPT · Copilot 등) 사용 규정은?',
        options: [
          '전사적으로 적극 활용 권장 (코드 입력 제한 없음)',
          '보안 유출 방지를 위해 사내 소스 코드 입력 전면 금지',
        ],
      },
      {
        id: 'dev-5',
        text: '그날 하루 일과를 마칠 때 개발자의 깃(Git) 상태는?',
        options: [
          '작업이 미완성이어도 매일 임시(WIP)로 원격 저장소 푸시 필수',
          '독립적인 기능 단위로 작업이 완결되었을 때만 원격 저장소 푸시',
        ],
      },
    ],
  },
  {
    key: 'code-access',
    label: 'CODE · ACCESS',
    description: '코드와 권한·리뷰·배포·테스트·의존성',
    dotColor: '#C0392B',
    questions: [
      {
        id: 'code-1',
        text: '작업한 코드를 메인 브랜치에 합치기(Merge) 위한 조건은?',
        options: [
          '책임자(테크리드/시니어) 1인 이상의 승인(Approve) 필수',
          '동료 개발자 1인 이상의 코드 리뷰 통과 시 병합 가능',
          '리뷰어를 둘 여력이 없어 리뷰 없이 본인이 바로 병합',
        ],
      },
      {
        id: 'code-2',
        text: '서면으로만 진행되는 코드 리뷰 시 선호하는 피드백 방식은?',
        options: [
          '감정적 표현을 배제하고 논리와 효율성 중심의 직관적 피드백',
          '오해 방지를 위해 권고(Suggestion) 등 부드러운 표현 지향',
        ],
      },
      {
        id: 'code-3',
        text: '프로덕션(운영) 서버 배포 주기 및 시간대 룰은?',
        options: [
          '주말 및 휴일 전(금요일 오후 등) 배포 원칙적 금지',
          'CI/CD 파이프라인을 통한 상시 배포 (시간대 제한 없음)',
        ],
      },
      {
        id: 'code-4',
        text: '유닛(Unit) 및 E2E 테스트 코드 작성 기준은?',
        options: [
          '지정된 커버리지 이상 테스트 코드 필수 작성 (미작성 시 PR 반려)',
          '초기 개발 속도 확보를 위해 테스트 코드 작성 전면 생략',
        ],
      },
      {
        id: 'code-5',
        text: '새로운 오픈소스나 패키지(npm, pip 등)를 추가하고 싶을 때 룰은?',
        options: [
          '의존성 및 보안 검토를 위해 책임자의 사전 서면 승인 필수',
          '소통 채널에 도입 목적과 패키지 정보 공유 즉시 자율 도입',
        ],
      },
    ],
  },
];

export const PROJECT_QUESTION_TEMPLATE = [
  {
    id: 'proj-kpi',
    text: '이 프로젝트의 성공 여부를 판단하는 핵심 지표(KPI)나 마일스톤은?',
    options: [],
    placeholder: '예: 11월 1일까지 MVP 배포 및 활성 유저 1,000명 달성',
  },
  {
    id: 'proj-target',
    text: '이 프로젝트가 서비스될 주요 타겟 국가 및 사용자층은?',
    options: [],
    placeholder: '예: 다국어 지원이 필요한 베트남 현지 20대 대학생',
  },
  {
    id: 'proj-decision-maker',
    text: '기획 변경 · 디자인 수정 · 최종 병합(Merge) 승인 권한을 가진 최종 결정권자는?',
    options: [],
    placeholder: '담당자 이름을 입력해 주세요',
  },
  {
    id: 'proj-stack',
    text: '전사 표준과 다르게 이 프로젝트에만 예외로 적용되는 스택이 있나요?',
    options: ['전사 표준 기술 스택과 100% 동일하게 진행'],
    placeholder: '예: 본 프로젝트에 한하여 프론트엔드는 React 대신 Vue.js 사용',
  },
  {
    id: 'proj-deploy-exception',
    text: '전사 배포 규정과 별개로 이 프로젝트에만 적용되는 예외 룰이 있나요?',
    options: [
      '예외 없음 (전사 배포 규정 엄격 적용)',
      '프로토타입 단계이므로 사전 승인 절차 생략 후 상시 자율 배포 허용',
    ],
  },
  {
    id: 'proj-test-exception',
    text: '이 프로젝트에만 적용되는 테스트 코드 작성 예외 룰이 있나요?',
    options: [
      '예외 없음 (전사 테스트 규정 엄격 적용)',
      '신속한 MVP 검증을 위해 본 프로젝트에 한하여 테스트 코드 작성 생략',
    ],
  },
  {
    id: 'proj-estimation',
    text: '개별 기능(티켓)의 일정 산정(스토리 포인트)은 누가 주도하나요?',
    options: [
      '기획자 및 테크리드가 마감일을 지정하여 하향식(Top-down)으로 할당',
      '담당 개발자가 직접 소요 시간을 산정하여 상향식(Bottom-up)으로 제안',
    ],
  },
  {
    id: 'proj-change-comm',
    text: '개발 도중 기획 · 디자인 수정이 필요할 때의 소통 방식은?',
    options: [
      '해당 이슈 티켓에 서면 코멘트를 남기고 기획자/디자이너의 최종 승인 대기',
      '개발자가 자체적으로 판단 및 수정하여 구현 후 사후 서면 공유',
    ],
  },
];

export const EMPTY_ANSWER = { selected: null, customText: '', customSaved: false };

export function getQuestionStatus(answer) {
  if (!answer || answer.selected === null || answer.selected === undefined) return 'unconfirmed';
  if (answer.selected === 'skip') return 'skip';
  if (answer.selected === 'custom') return answer.customSaved ? 'confirmed' : 'drafting';
  return 'confirmed';
}

export function getAnswerPreviewText(question, answer) {
  const status = getQuestionStatus(answer);
  if (status !== 'confirmed') return '';
  if (answer.selected === 'custom') return answer.customText;
  return question.options[answer.selected] ?? '';
}

export function countConfirmed(questions, answers) {
  return questions.filter((q) => getQuestionStatus(answers[q.id]) === 'confirmed').length;
}

export const TOTAL_HANDBOOK_QUESTIONS = HANDBOOK_CATEGORIES.reduce(
  (sum, category) => sum + category.questions.length,
  0
);
