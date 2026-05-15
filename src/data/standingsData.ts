import type { ConstructorStanding, DriverStanding } from '../types/standings';

export const constructors: ConstructorStanding[] = [
  { position: 1, team: 'Oracle Red Bull Racing', short: 'RBR', color: '#3671C6', points: 412, wins: 9 },
  { position: 2, team: 'Scuderia Ferrari', short: 'FER', color: '#E8002D', points: 378, wins: 6 },
  { position: 3, team: 'Mercedes-AMG Petronas', short: 'MER', color: '#27F4D2', points: 329, wins: 4 },
  { position: 4, team: 'McLaren Formula 1', short: 'MCL', color: '#FF8000', points: 298, wins: 3 },
  { position: 5, team: 'Aston Martin Aramco', short: 'AST', color: '#358C75', points: 186, wins: 0 },
  { position: 6, team: 'BWT Alpine F1', short: 'ALP', color: '#FF87BC', points: 124, wins: 0 },
  { position: 7, team: 'Visa Cash App RB', short: 'RB', color: '#6692FF', points: 98, wins: 0 },
  { position: 8, team: 'Stake F1 Team Kick Sauber', short: 'SAU', color: '#52E252', points: 44, wins: 0 },
  { position: 9, team: 'MoneyGram Haas', short: 'HAA', color: '#B6BABD', points: 38, wins: 0 },
  { position: 10, team: 'Williams Racing', short: 'WIL', color: '#64C4FF', points: 22, wins: 0 },
];

export const drivers: DriverStanding[] = [
  { position: 1, name: 'M. Verstappen', team: 'RBR', points: 285, podiums: 14 },
  { position: 2, name: 'C. Leclerc', team: 'FER', points: 246, podiums: 11 },
  { position: 3, name: 'L. Norris', team: 'MCL', points: 228, podiums: 10 },
  { position: 4, name: 'O. Piastri', team: 'MCL', points: 198, podiums: 7 },
  { position: 5, name: 'C. Sainz', team: 'FER', points: 176, podiums: 6 },
  { position: 6, name: 'G. Russell', team: 'MER', points: 162, podiums: 5 },
  { position: 7, name: 'L. Hamilton', team: 'MER', points: 155, podiums: 5 },
  { position: 8, name: 'S. Pérez', team: 'RBR', points: 127, podiums: 4 },
  { position: 9, name: 'F. Alonso', team: 'AST', points: 98, podiums: 2 },
  { position: 10, name: 'L. Stroll', team: 'AST', points: 64, podiums: 0 },
];
