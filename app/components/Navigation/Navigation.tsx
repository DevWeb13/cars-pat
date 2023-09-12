import React from 'react';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <button
        className={styles.burger}
        id='burger'>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
      <ul className={styles.navDesktop}>
        <li>
          <a href='/'>Accueil</a>
        </li>
        <li>
          <a href='/services'>Services</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
        {/* Ajoutez d'autres liens ici */}
      </ul>
    </nav>
  );
};

export default Navigation;
