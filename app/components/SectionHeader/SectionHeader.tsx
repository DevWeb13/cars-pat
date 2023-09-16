import React from 'react';
import styles from './sectionHeader.module.css';

interface SectionHeaderProps {
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
  return (
    <header className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>{text}</h2>
    </header>
  );
};

export default SectionHeader;
