type Props<T extends string> = {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
  ariaLabel?: string;
};

export function FilterBar<T extends string>({
  label,
  options,
  value,
  onChange,
  ariaLabel,
}: Props<T>) {
  return (
    <div className="filter-group" role="group" aria-label={ariaLabel ?? label}>
      <p className="filter-group__label">{label}</p>
      <div className="filter-bar">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`filter-chip${value === option ? ' filter-chip--active' : ''}`}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
