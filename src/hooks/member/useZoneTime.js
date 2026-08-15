import { useState, useEffect } from 'react';

function formatZoneTime(timeZone) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date());
}

export function useZoneTime(timeZone) {
  const [time, setTime] = useState(() => formatZoneTime(timeZone));

  useEffect(() => {
    const timer = setInterval(() => setTime(formatZoneTime(timeZone)), 30000);
    return () => clearInterval(timer);
  }, [timeZone]);

  return time;
}