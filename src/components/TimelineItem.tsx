import { Link } from 'react-router-dom';
import type { Race } from '../types/race';
import { Badge } from './Badge';
import { Button } from './Button';

type Props = {
  race: Race;
  onUnwatch?: (id: string) => void;
};

export function TimelineItem({ race, onUnwatch }: Props) {
  return (
    <article className="card card--dashboard timeline-item">
      <div className="timeline-item__rail" aria-hidden>
        <span className="timeline-item__dot" />
      </div>
      <div className="timeline-item__body">
        <div className="timeline-item__meta">
          <p className="timeline-item__round">Manche {race.round}</p>
          <Badge type={race.type} />
        </div>
        <h3 className="timeline-item__title">
          <span aria-hidden>{race.flag}</span> {race.name}
        </h3>
        <p className="timeline-item__circuit">{race.circuit}</p>
        <p className="timeline-item__dates">{race.dates}</p>
        <p className="timeline-item__country">{race.country}</p>
        <span className="timeline-item__badge">J&apos;ai regardé ça ✓</span>
      </div>
      <div className="timeline-item__actions">
        <Link
          to={`/calendrier/${race.id}`}
          className="btn btn-outline timeline-item__link"
        >
          Détails
        </Link>
        {onUnwatch ? (
          <Button variant="outline" onClick={() => onUnwatch(race.id)}>
            Retirer
          </Button>
        ) : null}
      </div>
    </article>
  );
}
