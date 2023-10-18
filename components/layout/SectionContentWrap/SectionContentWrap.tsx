import React from 'react';
import styles from './sectionContentWrap.module.css';

interface SectionContentWrapProps {
  children: React.ReactNode;
  services?: boolean;
  reviews?: boolean;
  contact?: boolean;
  footer?: boolean;
}

const SectionContentWrap: React.FC<SectionContentWrapProps> = ({
  children,
  services,
  reviews,
  contact,
  footer,
}) => {
  return (
    <div
      className={
        styles.container +
        ' ' +
        (services ? styles.services : '') +
        ' ' +
        (reviews ? styles.reviews : '') +
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
