import { useCallback, useEffect, useMemo } from 'react';
import { races } from '../data/racesData';
import { useLocalStorage } from './useLocalStorage';

const KEY = 'pitlane-watched';

export function useWatchedRaces() {
  const [watched, setWatched] = useLocalStorage<string[]>(KEY, []);

  const knownRaceIds = useMemo(
    () => new Set(races.map((r) => r.id)),
    [],
  );

  useEffect(() => {
    setWatched((prev) => {
      const next = prev.filter((id) => knownRaceIds.has(id));
      return next.length === prev.length ? prev : next;
    });
  }, [knownRaceIds, setWatched]);

  const raceExists = useCallback(
    (id: string) => knownRaceIds.has(id),
    [knownRaceIds],
  );

  const has = useCallback(
    (id: string) => watched.includes(id),
    [watched],
  );

  const add = useCallback(
    (id: string) => {
      if (!knownRaceIds.has(id)) return;
      setWatched((prev) => (prev.includes(id) ? prev : [...prev, id]));
    },
    [knownRaceIds, setWatched],
  );

  const remove = useCallback(
    (id: string) => {
      setWatched((prev) => prev.filter((x) => x !== id));
    },
    [setWatched],
  );

  const toggle = useCallback(
    (id: string) => {
      setWatched((prev) => {
        if (prev.includes(id)) return prev.filter((x) => x !== id);
        if (!knownRaceIds.has(id)) return prev;
        return [...prev, id];
      });
    },
    [knownRaceIds, setWatched],
  );

  const toggleWatched = toggle;
  const check = has;

  return {
    watched,
    raceExists,
    check,
    has,
    add,
    remove,
    toggle,
    toggleWatched,
  };
}
