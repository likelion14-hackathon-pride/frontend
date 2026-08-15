import { Outlet, useNavigate } from 'react-router-dom';
import MemberShell from '../../components/member/layout/MemberShell';

const DUMMY_COMPANY_GROUPS = [
  {
    id: 'general',
    name: 'General',
    meta: 'Leave · benefits',
    items: [
      {
        id: 1,
        title: 'Annual leave needs no approval',
        sourceTag: '사내 규정.pdf',
        desc: 'Take leave without prior approval; just add it to the shared calendar.',
        quote: '연차는 사전 승인 없이 쓰고 캘린더에 등록만 해주세요.',
        sourceLine: 'Source · 사내 규정.pdf, page 3 · uploaded file',
        sourceHref: '#',
        defaultOpen: true,
      },
      { id: 2, title: 'Learning budget', sourceTag: '#general, 3 messages' },
    ],
  },
  {
    id: 'security',
    name: 'Security',
    meta: 'Security standards · operations',
    items: [
      {
        id: 3,
        title: 'Production DB access',
        sourceTag: '#dev, 3 messages',
        desc: 'Direct access to the production database happens only with the Owner present.',
        quote: '운영 DB 직접 접근은 제가 있을 때만 합니다.',
        sourceLine: 'Source · Slack #dev, 3 messages, 2026-05-21 · inferred from conversation',
        sourceHref: '#',
        defaultOpen: true,
      },
      { id: 4, title: 'Report incidents within an hour', sourceTag: '보안가이드.pdf' },
    ],
  },
];

const DUMMY_PROJECT_ITEMS = {
  'payment-api': [
    { id: 1, title: 'Deploys need Owner review', sourceTag: '#dev, 2 messages' },
    {
      id: 2,
      title: 'Webhook retries capped at 3',
      sourceTag: 'README.md',
      desc: 'After 3 failed retries, the webhook is marked dead and needs manual replay.',
      quote: '3번 재시도 실패하면 수동으로 다시 보내야 합니다.',
      sourceLine: 'Source · payment-api/README.md, line 44',
      sourceHref: '#',
      defaultOpen: true,
    },
  ],
  'admin-web': [
    { id: 3, title: 'Admin logs go to Sentry', sourceTag: 'CONTRIBUTING.md' },
  ],
};

export default function MemberHandbookPage() {
  const navigate = useNavigate();
  
  return (
    <MemberShell screenTitle="Handbook">
      <Outlet
        context={{
          companyGroups: DUMMY_COMPANY_GROUPS,
          projectItemsById: DUMMY_PROJECT_ITEMS,
          onGoToProject: () => navigate(`/member/handbook/project/${Object.keys(DUMMY_PROJECT_ITEMS)[0]}`),
        }}
      />
    </MemberShell>
  );
}