import React from 'react';
import styles from './sectionContentWrap.module.css';

interface SectionContentWrapProps {
  children: React.ReactNode;
  contact?: boolean;
}

const SectionContentWrap: React.FC<SectionContentWrapProps> = ({
  children,
  contact,
}) => {
  return (
    <div className={styles.container + ' ' + (contact ? styles.contact : '')}>
      {children}
    </div>
  );
};

export default SectionContentWrap;
