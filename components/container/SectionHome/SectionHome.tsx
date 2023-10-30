import React, { ForwardRefRenderFunction } from 'react';
import styles from './sectionHome.module.css';

import Section from '@/components/layout/Section/Section';

import HomeImageWrapper from '@/components/HomeImageWrapper/HomeImageWrapper';
import HomeAside from '@/components/HomeAside/HomeAside';

interface SectionHomeProps {
  id: string;
  ref: React.RefObject<HTMLElement>;
}

const SectionHome: ForwardRefRenderFunction<HTMLElement, SectionHomeProps> = (
  { id },
  ref
) => {
  return (
    <Section
      id={id}
      ref={ref}>
      {/* <SectionHeader
        word={words[currentIndex]}
        isFading={isFading}
      /> */}
      <div className={styles.homeImageAndAsideWrapper}>
        <HomeImageWrapper />
        <HomeAside />
      </div>
    </Section>
  );
};

export default React.forwardRef(SectionHome);
