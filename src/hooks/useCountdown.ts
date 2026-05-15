import { useEffect, useState } from 'react';

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

const empty: Countdown = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  expired: true,
};

export function useCountdown(targetDate: string | undefined): Countdown {
  const [timeLeft, setTimeLeft] = useState<Countdown>(empty);

  useEffect(() => {
    if (!targetDate) {
      const resetId = window.setTimeout(() => setTimeLeft(empty), 0);
      return () => clearTimeout(resetId);
    }

    const tick = () => {
      const distance = new Date(targetDate).getTime() - Date.now();
      if (distance <= 0) {
        setTimeLeft({ ...empty, expired: true });
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        expired: false,
      });
    };

    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
