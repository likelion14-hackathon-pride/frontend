// IANA 타임존의 지금 오프셋. 서머타임을 쓰는 곳(뉴욕)도 조회 시점 기준으로 맞는다.
export function zoneOffsetLabel(timeZone) {
  if (!timeZone) return '';
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'shortOffset',
    }).formatToParts(new Date());
    const name = parts.find((part) => part.type === 'timeZoneName')?.value ?? '';
    return name.replace('GMT', 'UTC') || '';
  } catch {
    return '';
  }
}

export function formatZoneTime(timeZone) {
  if (!timeZone) return '--:--';
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date());
  } catch {
    return '--:--';
  }
}

export function formatTimeOfDay(value) {
  if (!value) return '--:--';
  return String(value).slice(0, 5);
}

export function formatDateTime(value, { fallback = '—', timeZone } = {}) {
  if (!value) return fallback;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return fallback;
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(date);
  } catch {
    return date.toISOString().slice(0, 16).replace('T', ' ');
  }
}

export function formatShortKo(value, { fallback = '—' } = {}) {
  if (!value) return fallback;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return fallback;
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(date.getMonth() + 1)}.${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function formatClock(value, { fallback = '—' } = {}) {
  if (!value) return fallback;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return fallback;
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function formatRelativeKo(value, { fallback = '' } = {}) {
  if (!value) return fallback;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return fallback;
  const diffMs = Date.now() - date.getTime();
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return '방금';
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}일 전`;
  return formatShortKo(value, { fallback });
}

export function formatMinutes(total) {
  const minutes = Number(total) || 0;
  const sign = minutes < 0 ? '-' : '';
  const abs = Math.abs(minutes);
  const hours = Math.floor(abs / 60);
  const rest = abs % 60;
  if (hours === 0) return `${sign}${rest}m`;
  if (rest === 0) return `${sign}${hours}h`;
  return `${sign}${hours}h ${rest}m`;
}

export function formatSignedMinutes(total) {
  const minutes = Number(total) || 0;
  return `${minutes >= 0 ? '+' : ''}${formatMinutes(minutes)}`;
}
