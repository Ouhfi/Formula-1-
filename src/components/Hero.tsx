import { Link } from 'react-router-dom';
import type { Race } from '../types/race';
import { PitlaneIcon } from './icons/PitlaneIcon';
import { CountdownTimer } from './CountdownTimer';
import { StatTile } from './StatTile';

type Props = {
  nextRace: Race;
};

export function Hero({ nextRace }: Props) {
  return (
    <section className="card card--dashboard home-hero__panel home-hero__panel--primary hero">
      <svg className="home-hero__visual hero__visual" viewBox="0 0 120 80" aria-hidden>
        <path
          d="M8 52 C8 28 28 12 52 12 H88 C104 12 112 28 112 44 C112 60 96 68 80 68 H48 C32 68 20 72 12 76"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <p className="home-hero__eyebrow hero__eyebrow">
        <PitlaneIcon name="flag" size={14} className="home-hero__eyebrow-icon" />
        Prochaine course
      </p>
      <h2 className="home-hero__race hero__title">{nextRace.name}</h2>
      <p className="home-hero__circuit hero__circuit">
        {nextRace.flag} {nextRace.circuit}
      </p>
      <CountdownTimer startDate={nextRace.startDate} />
      <div className="home-hero__meta hero__meta">
        <StatTile label="Manche" value={`R${nextRace.round}`} icon="circuit" />
        <StatTile label="Format" value={nextRace.type} icon="flag" />
        <StatTile label="Continent" value={nextRace.continent} icon="telemetry" />
      </div>
      <Link to={`/calendrier/${nextRace.id}`} className="home-hero__cta hero__cta">
        Briefing course
      </Link>
    </section>
  );
}
