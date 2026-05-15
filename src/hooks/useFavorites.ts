import { useCallback, useEffect, useMemo } from 'react';
import { races } from '../data/racesData';
import { useLocalStorage } from './useLocalStorage';

const KEY = 'pitlane-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<string[]>(KEY, []);

  const knownRaceIds = useMemo(
    () => new Set(races.map((r) => r.id)),
    [],
  );

  useEffect(() => {
    setFavorites((prev) => {
      const next = prev.filter((id) => knownRaceIds.has(id));
      return next.length === prev.length ? prev : next;
    });
  }, [knownRaceIds, setFavorites]);

  const raceExists = useCallback(
    (id: string) => knownRaceIds.has(id),
    [knownRaceIds],
  );

  const has = useCallback(
    (id: string) => favorites.includes(id),
    [favorites],
  );

  const add = useCallback(
    (id: string) => {
      if (!knownRaceIds.has(id)) return;
      setFavorites((prev) => (prev.includes(id) ? prev : [...prev, id]));
    },
    [knownRaceIds, setFavorites],
  );

  const remove = useCallback(
    (id: string) => {
      setFavorites((prev) => prev.filter((x) => x !== id));
    },
    [setFavorites],
  );

  const toggle = useCallback(
    (id: string) => {
      setFavorites((prev) => {
        if (prev.includes(id)) return prev.filter((x) => x !== id);
        if (!knownRaceIds.has(id)) return prev;
        return [...prev, id];
      });
    },
    [knownRaceIds, setFavorites],
  );

  const toggleFav = toggle;
  const check = has;

  return {
    favorites,
    raceExists,
    check,
    has,
    add,
    remove,
    toggle,
    toggleFav,
  };
}
