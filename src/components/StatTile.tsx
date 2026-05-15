import { PitlaneIcon, type PitlaneIconName } from './icons/PitlaneIcon';

type Props = {
  label: string;
  value: string;
  hint?: string;
  icon?: PitlaneIconName;
};

export function StatTile({ label, value, hint, icon }: Props) {
  return (
    <div className="stat-tile">
      <div className="stat-tile__head">
        <p className="stat-tile__label">{label}</p>
        {icon ? (
          <PitlaneIcon name={icon} size={16} className="stat-tile__icon" />
        ) : null}
      </div>
      <p className="stat-tile__value">{value}</p>
      {hint ? <p className="stat-tile__hint">{hint}</p> : null}
    </div>
  );
}
