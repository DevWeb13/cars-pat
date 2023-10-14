import React from 'react';
import styles from './sectionContentWrap.module.css';

interface SectionContentWrapProps {
  children: React.ReactNode;
  contact?: boolean;
  footer?: boolean;
}

const SectionContentWrap: React.FC<SectionContentWrapProps> = ({
  children,
  contact,
  footer,
}) => {
  return (
    <div
      className={
        styles.container +
        ' ' +
        (contact ? styles.contact : '') +
        ' ' +
        (footer ? styles.footer : '')
      }>
      {children}
    </div>
  );
};

export default SectionContentWrap;
