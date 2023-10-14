'use client';

import React, { useEffect, useState } from 'react';
import styles from './sectionHeader.module.css';

interface SectionHeaderProps {
  text?: string;
  manyWord?: Array<string>;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  text,
  manyWord = [],
}) => {
  const [word, setWord] = useState(manyWord?.[0]);
  const [animationClass, setAnimationClass] = useState(styles.fadeIn);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (manyWord && manyWord.length > 0) {
        setAnimationClass('fadeOut'); // Déclenchez l'animation fadeOut
        setTimeout(() => {
          i = (i + 1) % manyWord.length; // Incrémentez l'index ici
          setWord(manyWord[i]);
          setAnimationClass('fadeIn'); // Déclenchez l'animation fadeIn
        }, 1000); // Attendez que l'animation fadeOut soit terminée
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [manyWord]);

  return (
    <header
      className={`${styles.sectionHeader} ${
        manyWord.length > 0 ? styles.sectionHeaderHome : ''
      }`}>
      <div className={styles.leftWideBand}>
        <div className={styles.leftThinBand} />
      </div>
      <h2 className={`${styles.sectionTitle} ${animationClass}`}>
        {text ? text : word}
      </h2>
      <div className={styles.rightWideBand}>
        <div className={styles.rightThinBand} />
      </div>
    </header>
  );
};

export default SectionHeader;
