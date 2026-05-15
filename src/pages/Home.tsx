import { useMemo, useRef } from 'react';
import { gsap, useGSAP } from '../gsapSetup';
import { races } from '../data/racesData';
import { getFallbackRace, getNextRace } from '../lib/nextRace';
import { useFavorites } from '../hooks/useFavorites';
import { useWatchedRaces } from '../hooks/useWatchedRaces';
import { Hero } from '../components/Hero';
import { PageHeader } from '../components/PageHeader';
import { RaceCard } from '../components/RaceCard';
import { StatTile } from '../components/StatTile';
import '../styles/pages.css';

export function Home() {
  const root = useRef<HTMLDivElement>(null);
  const { favorites, toggleFav } = useFavorites();
  const { watched } = useWatchedRaces();

  const { nextRace, featured } = useMemo(() => {
    const next = getNextRace(races) ?? getFallbackRace(races);
    const order = [...races].sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    );
    const idx = order.findIndex((r) => r.id === next.id);
    const feat = order[idx + 1] ?? order[0];
    return { nextRace: next, featured: feat! };
  }, []);

  useGSAP(
    () => {
      gsap.from('.home-hero__panel, .hero', {
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power4.out',
      });
    },
    { scope: root },
  );

  const garagePct = Math.round(
    (favorites.length / Math.max(races.length, 1)) * 100,
  );
  const watchedPct = Math.round(
    (watched.length / Math.max(races.length, 1)) * 100,
  );

  return (
    <div className="page page--home" ref={root}>
      <PageHeader
        eyebrow="Contrôle course"
        title="Le Paddock"
        subtitle="Tableau de bord premium pour la saison Formula 1 2026 — compte à rebours, favoris et calendrier complet."
      />

      <section className="home-hero">
        <Hero nextRace={nextRace} />
        <div className="home-hero__panel home-hero__panel--secondary">
          <p className="home-hero__eyebrow featured-label">Course à la Une</p>
          <RaceCard
            race={featured}
            isFav={favorites.includes(featured.id)}
            onToggleFav={toggleFav}
          />
        </div>
      </section>

      <section className="home-strip">
        <StatTile
          label="Grands Prix"
          value={String(races.length)}
          hint="Calendrier 2026 chargé"
          icon="calendar"
        />
        <StatTile
          label="Mon Garage"
          value={`${garagePct}%`}
          hint={`${favorites.length} favori(s)`}
          icon="garage"
        />
        <StatTile
          label="Ma Saison"
          value={`${watchedPct}%`}
          hint={`${watched.length} course(s) vue(s)`}
          icon="season"
        />
      </section>
    </div>
  );
}
