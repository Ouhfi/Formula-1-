import { useMemo, useRef, useState } from 'react';
import { gsap, useGSAP } from '../gsapSetup';
import { races } from '../data/racesData';
import type { Race, RaceType } from '../types/race';
import { RaceCard } from '../components/RaceCard';
import { FilterBar } from '../components/FilterBar';
import { PageHeader } from '../components/PageHeader';
import { useFavorites } from '../hooks/useFavorites';
import { useWatchedRaces } from '../hooks/useWatchedRaces';
import '../styles/pages.css';

const continents = ['Tous', 'Asia', 'Europe', 'Americas', 'Oceania'] as const;
type ContinentFilter = (typeof continents)[number];

const weekendTypes = ['Tous', 'Standard', 'Sprint'] as const;
type WeekendFilter = (typeof weekendTypes)[number];

function filterRaces(
  continent: ContinentFilter,
  weekend: WeekendFilter,
): Race[] {
  return races.filter((r) => {
    const continentOk =
      continent === 'Tous' || r.continent === continent;
    const weekendOk =
      weekend === 'Tous' || r.type === (weekend as RaceType);
    return continentOk && weekendOk;
  });
}

export function Calendar() {
  const root = useRef<HTMLDivElement>(null);
  const [continent, setContinent] = useState<ContinentFilter>('Tous');
  const [weekend, setWeekend] = useState<WeekendFilter>('Tous');
  const { favorites, toggleFav } = useFavorites();
  const { watched, toggleWatched } = useWatchedRaces();
  const filtered = useMemo(
    () => filterRaces(continent, weekend),
    [continent, weekend],
  );

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.calendar-card');
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 32,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: (i % 6) * 0.04,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    },
    { scope: root, dependencies: [continent, weekend], revertOnUpdate: true },
  );

  return (
    <div className="page page--calendar" ref={root}>
      <PageHeader
        eyebrow="Saison 2026"
        title="Calendrier des Courses"
        subtitle="24 Grands Prix — filtrez par continent et format de week-end."
      />

      <div className="calendar-filters">
        <FilterBar
          label="Continent"
          options={continents}
          value={continent}
          onChange={setContinent}
        />
        <FilterBar
          label="Week-end"
          options={weekendTypes}
          value={weekend}
          onChange={setWeekend}
        />
      </div>

      <p className="calendar-count" aria-live="polite">
        {filtered.length} / {races.length} manches affichées
      </p>

      <div className="race-grid calendar-grid">
        {filtered.map((r) => (
          <RaceCard
            key={r.id}
            race={r}
            isFav={favorites.includes(r.id)}
            isWatched={watched.includes(r.id)}
            onToggleFav={toggleFav}
            onToggleWatched={toggleWatched}
            calendarMode
            scrollReveal
          />
        ))}
      </div>
    </div>
  );
}
