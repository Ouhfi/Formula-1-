import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap, useGSAP } from '../gsapSetup';
import { races } from '../data/racesData';
import type { Race, RaceType } from '../types/race';
import { FilterBar } from '../components/FilterBar';
import { PageHeader } from '../components/PageHeader';
import { TimelineItem } from '../components/TimelineItem';
import { EmptyState } from '../components/EmptyState';
import { useWatchedRaces } from '../hooks/useWatchedRaces';
import '../styles/pages.css';

const continents = ['Tous', 'Asia', 'Europe', 'Americas', 'Oceania'] as const;
type ContinentFilter = (typeof continents)[number];

const weekendTypes = ['Tous', 'Standard', 'Sprint'] as const;
type WeekendFilter = (typeof weekendTypes)[number];

function filterWatched(
  list: Race[],
  continent: ContinentFilter,
  weekend: WeekendFilter,
): Race[] {
  return list.filter((r) => {
    const continentOk = continent === 'Tous' || r.continent === continent;
    const weekendOk = weekend === 'Tous' || r.type === (weekend as RaceType);
    return continentOk && weekendOk;
  });
}

export function Season() {
  const root = useRef<HTMLDivElement>(null);
  const [continent, setContinent] = useState<ContinentFilter>('Tous');
  const [weekend, setWeekend] = useState<WeekendFilter>('Tous');
  const { watched, toggleWatched } = useWatchedRaces();

  const watchedRaces = useMemo(() => {
    const list = races
      .filter((r) => watched.includes(r.id))
      .sort((a, b) => a.round - b.round);
    return filterWatched(list, continent, weekend);
  }, [watched, continent, weekend]);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((row, i) => {
        gsap.from(row, {
          opacity: 0,
          x: -24,
          duration: 0.5,
          ease: 'power2.out',
          delay: i * 0.04,
          scrollTrigger: {
            trigger: row,
            start: 'top 92%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    },
    { scope: root, dependencies: [continent, weekend, watched.length] },
  );

  return (
    <div className="page page--season" ref={root}>
      <PageHeader
        eyebrow="Historique"
        title="Ma Saison"
        subtitle="Chronologie des courses que vous avez regardées — pitlane-watched."
      />

      <div className="calendar-filters season-filters">
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

      {watched.length === 0 ? (
        <EmptyState
          title="Aucune course vue"
          action={
            <Link to="/calendrier" className="btn btn-primary">
              Parcourir le calendrier
            </Link>
          }
        >
          <p>
            Marquez des courses comme vues depuis le calendrier ou la fiche
            course.
          </p>
        </EmptyState>
      ) : watchedRaces.length === 0 ? (
        <EmptyState title="Aucun résultat pour ces filtres">
          <p>Élargissez les filtres continent ou format week-end.</p>
        </EmptyState>
      ) : (
        <div className="season-timeline">
          {watchedRaces.map((r) => (
            <TimelineItem
              key={r.id}
              race={r}
              onUnwatch={toggleWatched}
            />
          ))}
        </div>
      )}
    </div>
  );
}
