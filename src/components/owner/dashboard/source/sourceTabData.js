import { CONNECTION_KIND } from '../../../../apis/constants';

// 소스 종류별 화면 문구. 숫자와 목록은 전부 서버에서 온다.
export const SOURCE_CONFIG = {
  [CONNECTION_KIND.GITHUB]: {
    key: 'github',
    provider: CONNECTION_KIND.GITHUB,
    title: 'GitHub',
    subtitle: '코드 저장소',
    syncMode: 'live',
    connectedLabel: '연결된 저장소',
    addLabel: '저장소 추가',
    addPlaceholder: '추가할 저장소를 고르세요',
    emptyLabel: '아직 수집 대상 저장소가 없습니다',
    notConnectedLabel: 'GitHub 이 아직 연결되지 않았습니다',
  },
  [CONNECTION_KIND.SLACK]: {
    key: 'slack',
    provider: CONNECTION_KIND.SLACK,
    title: 'Slack',
    subtitle: '팀 대화',
    syncMode: 'live',
    connectedLabel: '연결된 채널',
    addLabel: '채널 추가',
    addPlaceholder: '추가할 채널을 고르세요',
    emptyLabel: '아직 수집 대상 채널이 없습니다',
    notConnectedLabel: 'Slack 이 아직 연결되지 않았습니다',
  },
  [CONNECTION_KIND.LOCAL]: {
    key: 'localFile',
    provider: CONNECTION_KIND.LOCAL,
    title: '로컬 파일',
    subtitle: '직접 업로드',
    syncMode: 'manual',
    connectedLabel: '업로드된 파일',
    addLabel: '파일 업로드',
    addPlaceholder: '',
    emptyLabel: '아직 올린 파일이 없습니다',
    notConnectedLabel: '파일을 올리면 여기에 쌓입니다',
  },
};

export const SOURCE_ORDER = [CONNECTION_KIND.GITHUB, CONNECTION_KIND.SLACK, CONNECTION_KIND.LOCAL];

export function formatBytes(size) {
  const bytes = Number(size);
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}
