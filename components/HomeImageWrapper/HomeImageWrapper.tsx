import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './homeImageWrapper.module.css';
import { Link } from 'react-scroll';

import Button from '../ui/Button/Button';
import CompanyAnniversary from '../CompanyAnniversary/CompanyAnniversary';
import porscheRouge from '@/public/assets/photosWebp/porscheRougeAvecFondPlaqueFloutée.webp';
import mustangBleue from '@/public/assets/photosWebp/18.webp';

import { StaticImageData } from 'next/image';

interface HomeImageWrapperProps {}

const HomeImageWrapper: React.FC<HomeImageWrapperProps> = ({}) => {
  const photos = [
    {
      src: porscheRouge,
      alt: 'Porsche rouge',
    },
    {
      src: mustangBleue,
      alt: 'Mustang GT bleue',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0); // Pour suivre l'index actuel
  const [isFading, setIsFading] = useState(false); // Pour suivre l'état de l'animation

  const animationClass = isFading ? 'fadeOut' : 'fadeIn';
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % photos.length);
        setIsFading(false);
      }, 1000); // Assumons que l'animation fadeOut dure 1 seconde
    }, 5000); // Changer toutes les 5 secondes

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className={`${styles.homeImageWrapper}`}>
      <div className={styles.linkAndAnniversaryWrapper}>
        <CompanyAnniversary />
        <div className={styles.linkWrapper}>
          <Link
            href='/'
            to={'services'}
            smooth={true}
            offset={-60}
            duration={500}>
            <Button
              text='Découvrez nos services'
              home>
              <div className={styles.keyIcon} />
            </Button>
          </Link>

          <Link
            href='/'
            to={'contact'}
            smooth={true}
            offset={-60}
            duration={500}>
            <Button
              text='Contactez-nous'
              color='white'
              animate={true}
              home>
              <div className={styles.messageIcon} />
            </Button>
          </Link>
        </div>
      </div>

      <Image
        src={photos[0].src}
        alt={photos[0].alt}
        width={967}
        height={694}
        className={`${styles.homeImage} ${animationClass} ${
          currentIndex === 1 ? styles.none : ''
        }`}
        priority
      />
      <Image
        src={photos[1].src}
        alt={photos[1].alt}
        width={967}
        height={694}
        className={`${styles.homeImage} ${animationClass} ${
          currentIndex === 0 ? styles.none : ''
        }`}
        priority
      />
    </div>
  );
};

export default HomeImageWrapper;
