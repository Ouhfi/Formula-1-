import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap, useGSAP } from '../gsapSetup';
import { races } from '../data/racesData';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { PageHeader } from '../components/PageHeader';
import { useFavorites } from '../hooks/useFavorites';
import { useWatchedRaces } from '../hooks/useWatchedRaces';
import '../styles/pages.css';

export function RaceDetail() {
  const { raceId } = useParams();
  const root = useRef<HTMLDivElement>(null);
  const { favorites, toggleFav } = useFavorites();
  const { watched, toggleWatched } = useWatchedRaces();

  const race = races.find((r) => r.id === raceId);

  useGSAP(
    () => {
      gsap.from('.race-detail__hero > *', {
        y: 24,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',
      });
      gsap.from('.race-weekend-info__item', {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power2.out',
        delay: 0.1,
      });
    },
    { scope: root, dependencies: [raceId], revertOnUpdate: true },
  );

  if (!race) {
    return (
      <div className="page page--empty">
        <PageHeader
          eyebrow="Erreur"
          title="Course introuvable"
          subtitle="Cette manche n'existe pas dans le calendrier local."
        />
        <Link to="/calendrier" className="text-link">
          ← Retour au calendrier
        </Link>
      </div>
    );
  }

  const isFav = favorites.includes(race.id);
  const isWatched = watched.includes(race.id);

  return (
    <div className="page page--detail" ref={root}>
      <Link to="/calendrier" className="text-link race-detail__back">
        ← Calendrier
      </Link>

      <section className="card card--dashboard race-detail__hero">
        <div className="race-detail__hero-top">
          <span className="race-detail__round">Manche {race.round}</span>
          <Badge type={race.type} />
        </div>
        <p className="race-detail__flag">{race.flag}</p>
        <h1 className="race-detail__title">{race.name}</h1>
        <p className="race-detail__circuit">{race.circuit}</p>
        <p className="race-detail__dates">{race.dates}</p>
        <p className="race-detail__copy">{race.description}</p>
        <div className="race-detail__actions">
          <Button
            variant={isFav ? 'primary' : 'outline'}
            onClick={() => toggleFav(race.id)}
          >
            {isFav ? 'Dans le garage ★' : 'Ajouter au Garage'}
          </Button>
          <Button
            variant={isWatched ? 'primary' : 'outline'}
            onClick={() => toggleWatched(race.id)}
          >
            {isWatched ? 'Marquée comme vue' : 'Marquer comme vue'}
          </Button>
        </div>
      </section>

      <section className="race-weekend-info">
        <h2 className="section-title">Race Weekend Info</h2>
        <div className="race-weekend-info__grid">
          <div className="card card--dashboard race-weekend-info__item">
            <p className="stat-tile__label">Longueur circuit</p>
            <p className="stat-tile__value">{race.circuitLength}</p>
          </div>
          <div className="card card--dashboard race-weekend-info__item">
            <p className="stat-tile__label">Tours</p>
            <p className="stat-tile__value">{race.laps}</p>
          </div>
          <div className="card card--dashboard race-weekend-info__item">
            <p className="stat-tile__label">Pays</p>
            <p className="stat-tile__value">
              {race.flag} {race.country}
            </p>
          </div>
          <div className="card card--dashboard race-weekend-info__item">
            <p className="stat-tile__label">Continent</p>
            <p className="stat-tile__value">{race.continent}</p>
          </div>
          <div className="card card--dashboard race-weekend-info__item">
            <p className="stat-tile__label">Format</p>
            <p className="stat-tile__value">{race.type}</p>
          </div>
          <div className="card card--dashboard race-weekend-info__item">
            <p className="stat-tile__label">Nouveau circuit</p>
            <p className="stat-tile__value">
              {race.isNewCircuit ? 'Oui' : 'Non'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
