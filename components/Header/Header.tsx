'use client';

import React, { useEffect, useRef } from 'react';
import styles from './header.module.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-scroll';
import LinkNext from 'next/link';
import Button from '../ui/Button/Button';

interface HeaderProps {
  page?: string;
}

const Header: React.FC<HeaderProps> = ({ page }) => {
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
        {page ? (
          <>
            <LinkNext
              href='/'
              className={styles.logoWrapper}>
              <h1 className={styles.h1}>Cars Pat</h1>
            </LinkNext>
            <LinkNext
              href='/'
              className={styles.contact}>
              <Button text='Retour' />
            </LinkNext>
          </>
        ) : (
          <>
            <Link
              href='/'
              to={'home'}
              smooth={true}
              offset={-84}
              duration={500}
              className={styles.logoWrapper}>
              <h1 className={styles.h1}>Cars Pat</h1>
            </Link>
            <Navigation />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
