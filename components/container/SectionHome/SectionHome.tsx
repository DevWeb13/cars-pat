import React, { useState, useEffect, ForwardRefRenderFunction } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0); // Pour suivre l'index actuel
  const [isFading, setIsFading] = useState(false); // Pour suivre l'état de l'animation

  const words = ['Carrosserie', 'Peinture'];
  const photos = [
    {
      url: '/assets/photosWebp/porscheRougeAvecFondPlaqueFloutée.webp',
      alt: 'Porsche rouge',
    },
    {
      url: '/assets/photosWebp/18.webp',
      alt: 'Mustang GT bleue',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsFading(false);
      }, 1000); // Assumons que l'animation fadeOut dure 1 seconde
    }, 5000); // Changer toutes les 5 secondes

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <Section
      id={id}
      ref={ref}>
      {/* <SectionHeader
        word={words[currentIndex]}
        isFading={isFading}
      /> */}
      <div className={styles.homeImageAndAsideWrapper}>
        <HomeImageWrapper
          photo={photos[currentIndex]}
          isFading={isFading}
        />
        <HomeAside />
      </div>
    </Section>
  );
};

export default React.forwardRef(SectionHome);
