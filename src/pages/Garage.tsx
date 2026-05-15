import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, useGSAP } from '../gsapSetup';
import { races } from '../data/racesData';
import { useFavorites } from '../hooks/useFavorites';
import { RaceCard } from '../components/RaceCard';
import { PageHeader } from '../components/PageHeader';
import { EmptyState } from '../components/EmptyState';
import '../styles/pages.css';

export function Garage() {
  const root = useRef<HTMLDivElement>(null);
  const { favorites, toggleFav } = useFavorites();
  const favRaces = races
    .filter((r) => favorites.includes(r.id))
    .sort((a, b) => a.round - b.round);

  useGSAP(
    () => {
      gsap.from('.garage-card', {
        y: 24,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
      });
    },
    { scope: root, dependencies: [favorites.length] },
  );

  return (
    <div className="page page--garage" ref={root}>
      <PageHeader
        eyebrow="Personnel"
        title="Mon Garage"
        subtitle="Vos Grands Prix favoris — synchronisés via pitlane-favorites."
      />

      <p className="garage-toolbar__count" aria-live="polite">
        {favRaces.length} course{favRaces.length === 1 ? '' : 's'} enregistrée
      </p>

      {favRaces.length === 0 ? (
        <EmptyState
          title="Le garage est vide"
          action={
            <Link to="/calendrier" className="btn btn-primary">
              Voir le calendrier
            </Link>
          }
        >
          <p>
            Ajoutez des courses en favori depuis le calendrier. Elles seront
            stockées sous <strong>pitlane-favorites</strong>.
          </p>
        </EmptyState>
      ) : (
        <div className="garage-list">
          {favRaces.map((r) => (
            <div key={r.id} className="garage-card">
              <RaceCard
                race={r}
                isFav
                onToggleFav={toggleFav}
                garageMode
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
