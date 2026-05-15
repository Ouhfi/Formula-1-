import { NavLink } from 'react-router-dom';
import { PitlaneIcon, type PitlaneIconName } from './icons/PitlaneIcon';

export type NavItem = {
  to: string;
  label: string;
  icon: PitlaneIconName;
  end?: boolean;
};

type Props = {
  items: NavItem[];
  collapsed?: boolean;
};

export function Navbar({ items, collapsed = false }: Props) {
  return (
    <nav
      className={`sidebar__nav navbar${collapsed ? ' navbar--collapsed' : ''}`}
      aria-label="Navigation principale"
    >
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={Boolean(item.end)}
          className={({ isActive }) =>
            `sidebar__link navbar__link${isActive ? ' sidebar__link--active navbar__link--active' : ''}`
          }
        >
          <span className="sidebar__link-icon navbar__icon" aria-hidden>
            <PitlaneIcon name={item.icon} size={18} />
          </span>
          <span className="sidebar__link-label navbar__label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Le Paddock', icon: 'home', end: true },
  { to: '/calendrier', label: 'Calendrier', icon: 'calendar' },
  { to: '/mongarage', label: 'Mon Garage', icon: 'garage' },
  { to: '/masaison', label: 'Ma Saison', icon: 'season' },
];
