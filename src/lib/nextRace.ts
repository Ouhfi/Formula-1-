import type { Race } from '../types/race';

export function getNextRace(races: Race[]): Race | null {
  const now = Date.now();
  const upcoming = [...races]
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    )
    .find((r) => new Date(r.startDate).getTime() > now);
  return upcoming ?? null;
}

export function getFallbackRace(races: Race[]): Race {
  const sorted = [...races].sort(
    (a, b) =>
      new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  );
  return sorted[sorted.length - 1] ?? races[0]!;
}
