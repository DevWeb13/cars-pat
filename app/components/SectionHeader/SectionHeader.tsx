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
        setAnimationClass(styles.fadeOut); // Déclenchez l'animation fadeOut
        setTimeout(() => {
          i = (i + 1) % manyWord.length; // Incrémentez l'index ici
          setWord(manyWord[i]);
          setAnimationClass(styles.fadeIn); // Déclenchez l'animation fadeIn
        }, 1000); // Attendez que l'animation fadeOut soit terminée
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [manyWord]);

  return (
    <header className={styles.sectionHeader}>
      <h2 className={`${styles.sectionTitle} ${animationClass}`}>
        {text ? text : word}
      </h2>
    </header>
  );
};

export default SectionHeader;
