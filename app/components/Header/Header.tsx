'use client';

import React, { useEffect, useRef } from 'react';
import styles from './header.module.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-scroll';

const Header = () => {
  const headerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 24) {
        headerContentRef.current?.classList.add('headerContentFixed');
      } else {
        headerContentRef.current?.classList.remove('headerContentFixed');
      }
    };

    // Ajoutez l'écouteur d'événement lorsque le composant est monté
    window.addEventListener('scroll', handleScroll);

    // Supprimez l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={styles.header}>
      <div
        className={styles.headerContent}
        ref={headerContentRef}>
        <Link
          href='/'
          to={'home'}
          smooth={true}
          offset={-60}
          duration={500}
          className={styles.logoWrapper}>
          <h1 className={styles.h1}>Cars Pat</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
