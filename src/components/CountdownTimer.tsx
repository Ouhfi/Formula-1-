import { useCountdown } from '../hooks/useCountdown';

type Props = {
  startDate: string;
  expiredMessage?: string;
};

export function CountdownTimer({
  startDate,
  expiredMessage = 'Session terminée — archive saison.',
}: Props) {
  const countdown = useCountdown(startDate);

  if (countdown.expired) {
    return <p className="countdown-timer__expired">{expiredMessage}</p>;
  }

  const cells = [
    { value: countdown.days, label: 'Jours' },
    { value: countdown.hours, label: 'Hrs' },
    { value: countdown.minutes, label: 'Min' },
    { value: countdown.seconds, label: 'Sec' },
  ];

  return (
    <div className="countdown-strip countdown-timer" aria-live="polite">
      {cells.map((cell) => (
        <div key={cell.label} className="countdown-cell">
          <span className="countdown-cell__value">
            {String(cell.value).padStart(2, '0')}
          </span>
          <span className="countdown-cell__label">{cell.label}</span>
        </div>
      ))}
    </div>
  );
}
