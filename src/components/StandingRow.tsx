import type { CSSProperties } from 'react';
import type { ConstructorStanding } from '../types/standings';

type Props = { row: ConstructorStanding };

export function StandingRow({ row }: Props) {
  const stripe = { '--accent': row.color } as CSSProperties;
  return (
    <div className="standing-row reveal-row" style={stripe}>
      <span className="standing-row__pos">{row.position}</span>
      <span className="standing-row__color" aria-hidden />
      <div className="standing-row__meta">
        <span className="standing-row__team">{row.team}</span>
        <span className="standing-row__short">{row.short}</span>
      </div>
      <span className="standing-row__wins">{row.wins}W</span>
      <span className="standing-row__pts">{row.points} pts</span>
    </div>
  );
}
