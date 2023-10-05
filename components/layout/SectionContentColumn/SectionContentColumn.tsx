import React from 'react';
import styles from './sectionContentColumn.module.css';

interface SectionContentColumnProps {
  children: React.ReactNode;
}

const SectionContentColumn: React.FC<SectionContentColumnProps> = ({
  children,
}) => {
  return <div className={styles.container}>{children}</div>;
};

export default SectionContentColumn;
