import React from 'react';
import styles from './header.module.css';
import Navigation from '../Navigation/Navigation';

// Définir le composant Header
const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Cars Pat</h1>
      <Navigation />
    </header>
  );
};

// Exporter le composant Header
export default Header;
