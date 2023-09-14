import React from 'react';
import styles from './header.module.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.h1}>Cars Pat</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
