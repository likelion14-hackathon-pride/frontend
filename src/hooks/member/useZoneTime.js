import { useEffect, useState } from 'react';

import { formatZoneTime } from '../../utils/time';

// 타임존이 아직 없으면(응답 대기 중) '--:--' 을 보여 준다.
export function useZoneTime(timeZone) {
  const [time, setTime] = useState(() => formatZoneTime(timeZone));

  useEffect(() => {
    setTime(formatZoneTime(timeZone));
    const timer = setInterval(() => setTime(formatZoneTime(timeZone)), 30000);
    return () => clearInterval(timer);
  }, [timeZone]);

  return time;
}

export default useZoneTime;
