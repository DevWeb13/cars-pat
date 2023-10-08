import React, { ReactNode, ForwardRefRenderFunction } from 'react';
import styles from './section.module.css';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const Section: ForwardRefRenderFunction<HTMLElement, SectionProps> = (
  { id, children },
  ref
) => {
  return (
    <section
      id={id}
      ref={ref}
      className={
        styles.section +
        ' ' +
        (id === 'home' ? styles.sectionHome : '') +
        ' ' +
        (id === 'services' ? styles.sectionServices : '')
      }>
      {children}
    </section>
  );
};

export default React.forwardRef(Section);
