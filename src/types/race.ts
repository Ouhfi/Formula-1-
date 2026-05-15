export type RaceType = 'Standard' | 'Sprint';

export type Race = {
  id: string;
  round: number;
  name: string;
  country: string;
  flag: string;
  circuit: string;
  dates: string;
  startDate: string;
  continent: string;
  type: RaceType;
  laps: number;
  circuitLength: string;
  isNewCircuit: boolean;
  description: string;
};
