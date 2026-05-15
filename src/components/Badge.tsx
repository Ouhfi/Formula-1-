import type { RaceType } from '../types/race';
import '../styles/components.css';

type Props = { type: RaceType };

export function Badge({ type }: Props) {
  return (
    <span
      className={`badge ${type === 'Sprint' ? 'badge-sprint' : 'badge-std'}`}
    >
      {type}
    </span>
  );
}
