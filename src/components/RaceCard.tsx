import { Link } from 'react-router-dom';
import type { Race } from '../types/race';
import { Badge } from './Badge';
import { Button } from './Button';
import '../styles/components.css';

type Props = {
  race: Race;
  isFav: boolean;
  onToggleFav: (id: string) => void;
  cardClassName?: string;
  scrollReveal?: boolean;
  calendarMode?: boolean;
  garageMode?: boolean;
  isWatched?: boolean;
  onToggleWatched?: (id: string) => void;
};

export function RaceCard({
  race,
  isFav,
  onToggleFav,
  cardClassName = '',
  scrollReveal = false,
  calendarMode = false,
  garageMode = false,
  isWatched = false,
  onToggleWatched,
}: Props) {
  return (
    <article
      className={[
        'card',
        'card--dashboard',
        'race-card',
        scrollReveal ? 'calendar-card' : '',
        cardClassName,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="race-card__top">
        <span className="race-card__round">Manche {race.round}</span>
        <Badge type={race.type} />
      </div>
      <h3 className="race-card__title">
        <span className="race-card__flag" aria-hidden>
          {race.flag}
        </span>{' '}
        {race.name}
      </h3>
      {(calendarMode || garageMode) && (
        <p className="race-card__country">{race.country}</p>
      )}
      <p className="race-card__circuit">{race.circuit}</p>
      <p className="race-card__dates">{race.dates}</p>
      <div
        className={`race-card__actions${calendarMode ? ' race-card__actions--calendar' : ''}`}
      >
        {!garageMode && (
          <Link
            to={`/calendrier/${race.id}`}
            className="btn btn-outline btn-block race-card__link"
          >
            {calendarMode ? 'Détails' : 'Briefing'}
          </Link>
        )}
        {garageMode ? (
          <>
            <Link
              to={`/calendrier/${race.id}`}
              className="btn btn-outline race-card__link"
            >
              Détails
            </Link>
            <Button variant="outline" onClick={() => onToggleFav(race.id)}>
              Retirer
            </Button>
          </>
        ) : (
          <>
            <Button
              variant={isFav ? 'primary' : 'outline'}
              className={calendarMode ? '' : 'race-card__star'}
              aria-label={
                isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'
              }
              onClick={() => onToggleFav(race.id)}
            >
              {calendarMode
                ? isFav
                  ? 'Favori ★'
                  : 'Favori'
                : isFav
                  ? '★'
                  : '☆'}
            </Button>
            {calendarMode && onToggleWatched ? (
              <Button
                variant={isWatched ? 'primary' : 'outline'}
                aria-label={
                  isWatched ? 'Marquer comme non vue' : 'Marquer comme vue'
                }
                onClick={() => onToggleWatched(race.id)}
              >
                {isWatched ? 'Vue ✓' : 'Vue'}
              </Button>
            ) : null}
          </>
        )}
      </div>
    </article>
  );
}
