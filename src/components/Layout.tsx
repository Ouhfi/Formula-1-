import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MotorsportBackdrop } from './MotorsportBackdrop';
import { PitlaneIcon } from './icons/PitlaneIcon';
import { Navbar, NAV_ITEMS } from './Navbar';
import { useSidebarCollapsed } from '../hooks/useSidebarCollapsed';
import '../styles/layout.css';

function formatClock() {
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date());
}

export function Layout() {
  const { collapsed, toggle } = useSidebarCollapsed();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [clock, setClock] = useState(formatClock);
  const location = useLocation();

  useEffect(() => {
    const id = window.setInterval(() => setClock(formatClock()), 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => setMobileOpen(false), 0);
    return () => clearTimeout(id);
  }, [location.pathname]);

  return (
    <div
      className={[
        'app-shell',
        collapsed ? 'app-shell--collapsed' : '',
        mobileOpen ? 'app-shell--nav-open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        className="app-shell__scrim"
        aria-hidden
        onClick={() => setMobileOpen(false)}
      />
      <MotorsportBackdrop />
      <aside className="sidebar" aria-label="Pitlane">
        <div className="sidebar__brand">
          <span className="sidebar__logo sidebar__logo-mark">
            <PitlaneIcon name="logo" size={22} strokeWidth={2} />
          </span>
          <div className="sidebar__titles">
            <span className="sidebar__name">Pitlane</span>
            <span className="sidebar__tag">Saison 2026</span>
          </div>
        </div>
        <p className="sidebar__section">Navigation</p>
        <Navbar items={NAV_ITEMS} collapsed={collapsed} />
        <div className="sidebar__footer">
          <p className="sidebar__fine">
            Favoris et courses vues sont enregistrés localement dans votre
            navigateur.
          </p>
        </div>
      </aside>

      <div className="app-main">
        <header className="top-bar">
          <div className="top-bar__left">
            <button
              type="button"
              className="icon-btn top-bar__burger"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
            <button
              type="button"
              className="icon-btn top-bar__collapse"
              aria-label={collapsed ? 'Déplier la barre' : 'Réduire la barre'}
              onClick={toggle}
            >
              <span className="top-bar__chevron" aria-hidden>
                ‹
              </span>
            </button>
            <div className="top-bar__route">
              <span className="top-bar__route-label top-bar__session">
                <PitlaneIcon name="telemetry" size={14} />
                Session active
              </span>
              <span className="top-bar__route-path">
                {location.pathname === '/' ? '/paddock' : location.pathname}
              </span>
            </div>
          </div>
          <div className="top-bar__right">
            <span className="top-bar__clock">{clock}</span>
            <span className="top-bar__live">
              <PitlaneIcon
                name="live"
                size={14}
                className="top-bar__live-icon"
              />
              LIVE
            </span>
          </div>
        </header>
        <main className="page-stage">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
