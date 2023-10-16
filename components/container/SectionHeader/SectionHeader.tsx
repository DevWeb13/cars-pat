import React from 'react';
import styles from './sectionHeader.module.css';

interface SectionHeaderProps {
  text?: string;
  word?: string;
  isFading?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  text,
  word,
  isFading,
}) => {
  // Si le texte est fourni, utilisez-le directement sans animation.
  if (text) {
    return (
      <header className={styles.sectionHeader}>
        <div className={styles.leftWideBand}>
          <div className={styles.leftThinBand} />
        </div>
        <h2 className={styles.sectionTitle}>{text}</h2>
        <div className={styles.rightWideBand}>
          <div className={styles.rightThinBand} />
        </div>
      </header>
    );
  }

  // Sinon, utilisez la logique d'animation avec la prop "word".
  const animationClass = isFading ? 'fadeOut' : 'fadeIn';

  return (
    <header
      className={`${styles.sectionHeader} ${
        word ? styles.sectionHeaderHome : ''
      }`}>
      <div className={styles.leftWideBand}>
        <div className={styles.leftThinBand} />
      </div>
      <h2 className={`${styles.sectionTitle} ${animationClass}`}>{word}</h2>
      <div className={styles.rightWideBand}>
        <div className={styles.rightThinBand} />
      </div>
    </header>
  );
};

export default SectionHeader;
