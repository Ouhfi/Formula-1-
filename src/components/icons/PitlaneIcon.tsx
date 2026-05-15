type PitlaneIconName =
  | 'home'
  | 'calendar'
  | 'garage'
  | 'season'
  | 'flag'
  | 'timer'
  | 'trophy'
  | 'telemetry'
  | 'circuit'
  | 'live'
  | 'chevron'
  | 'logo';

type Props = {
  name: PitlaneIconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

const common = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function PitlaneIcon({
  name,
  size = 20,
  className = '',
  strokeWidth = 1.5,
}: Props) {
  const sw = strokeWidth;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`pitlane-icon ${className}`.trim()}
      aria-hidden
    >
      {name === 'home' && (
        <>
          <path
            {...common}
            strokeWidth={sw}
            d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5Z"
          />
          <path {...common} strokeWidth={sw} d="M9 21v-7h6v7" />
        </>
      )}
      {name === 'calendar' && (
        <>
          <rect
            {...common}
            strokeWidth={sw}
            x="4"
            y="5"
            width="16"
            height="15"
            rx="2"
          />
          <path {...common} strokeWidth={sw} d="M8 3v4M16 3v4M4 10h16" />
          <path
            {...common}
            strokeWidth={sw}
            d="M8 14h2M14 14h2M8 17h2"
          />
        </>
      )}
      {name === 'garage' && (
        <>
          <path
            {...common}
            strokeWidth={sw}
            d="M5 20V9l7-4 7 4v11"
          />
          <path {...common} strokeWidth={sw} d="M5 20h14M9 20v-5h6v5" />
          <path {...common} strokeWidth={sw} d="M12 5v3" />
        </>
      )}
      {name === 'season' && (
        <>
          <path
            {...common}
            strokeWidth={sw}
            d="M6 4h12v16H6z"
          />
          <path
            {...common}
            strokeWidth={sw}
            d="M9 8h6M9 12h6M9 16h4"
          />
          <circle
            {...common}
            strokeWidth={sw}
            cx="17"
            cy="7"
            r="2.5"
          />
        </>
      )}
      {name === 'flag' && (
        <path
          {...common}
          strokeWidth={sw}
          d="M6 4v16M6 4c3-2 6 2 9 0s6 2 9 0v8c-3 2-6-2-9 0s-6 2-9 0"
        />
      )}
      {name === 'timer' && (
        <>
          <circle {...common} strokeWidth={sw} cx="12" cy="13" r="8" />
          <path {...common} strokeWidth={sw} d="M12 9v4l2.5 2.5M9 3h6" />
        </>
      )}
      {name === 'trophy' && (
        <>
          <path
            {...common}
            strokeWidth={sw}
            d="M8 4h8v5a4 4 0 0 1-8 0V4Z"
          />
          <path
            {...common}
            strokeWidth={sw}
            d="M6 4H4a2 2 0 0 0 2 3M18 4h2a2 2 0 0 1-2 3M12 13v3M8 20h8"
          />
        </>
      )}
      {name === 'telemetry' && (
        <>
          <path {...common} strokeWidth={sw} d="M4 20V10M10 20V6M16 20v-8M20 20V4" />
          <circle {...common} strokeWidth={sw} cx="4" cy="10" r="1" fill="currentColor" />
          <circle {...common} strokeWidth={sw} cx="10" cy="6" r="1" fill="currentColor" />
          <circle {...common} strokeWidth={sw} cx="16" cy="12" r="1" fill="currentColor" />
          <circle {...common} strokeWidth={sw} cx="20" cy="4" r="1" fill="currentColor" />
        </>
      )}
      {name === 'circuit' && (
        <path
          {...common}
          strokeWidth={sw}
          d="M5 14c0-4 3-7 7-7s7 3 7 7-3 7-7 7H8l-3 3v-3c-2-1-3-3-3-5.5Z"
        />
      )}
      {name === 'live' && (
        <>
          <circle {...common} strokeWidth={sw} cx="12" cy="12" r="2" fill="currentColor" />
          <path
            {...common}
            strokeWidth={sw}
            d="M12 8a4 4 0 0 1 0 8M12 5a7 7 0 0 1 0 14"
          />
        </>
      )}
      {name === 'chevron' && (
        <path {...common} strokeWidth={sw} d="m9 6 6 6-6 6" />
      )}
      {name === 'logo' && (
        <>
          <path
            {...common}
            strokeWidth={sw + 0.25}
            d="M6 18 12 4l6 14"
          />
          <path
            {...common}
            strokeWidth={sw}
            d="M8.5 13h7"
          />
        </>
      )}
    </svg>
  );
}

export type { PitlaneIconName };
