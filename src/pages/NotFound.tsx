import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, useGSAP } from '../gsapSetup';
import '../styles/pages.css';

export function NotFound() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.notfound__content > *', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    },
    { scope: root },
  );

  return (
    <div className="page page--notfound" ref={root}>
      <div className="notfound__content">
        <p className="home-hero__eyebrow">Off circuit</p>
        <h1 className="page-header__title">404</h1>
        <p className="page-header__subtitle">
          This route is not mapped on the Pitlane stack.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to command
        </Link>
      </div>
    </div>
  );
}
