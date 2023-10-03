import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './homeImageWrapper.module.css';
import { Link } from 'react-scroll';

interface HomeImageWrapperProps {
  photos: string[];
}

const HomeImageWrapper = ({ photos }: HomeImageWrapperProps) => {
  const [photo, setPhoto] = useState<string>(photos?.[0]);
  const [animationClass, setAnimationClass] = useState<string>(styles.fadeIn);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (photos && photos.length > 0) {
        setAnimationClass('fadeOut');
        setTimeout(() => {
          i = (i + 1) % photos.length;
          setPhoto(photos[i]);
          setAnimationClass('fadeIn');
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [photos]);

  return (
    <div className={`${styles.homeImageWrapper}`}>
      <div className={styles.linkWrapper}>
        <Link
          href='/'
          to={'services'}
          smooth={true}
          offset={-60}
          duration={500}
          className='button text'>
          Découvrez nos services
        </Link>

        <Link
          href='/'
          to={'contact'}
          smooth={true}
          offset={-60}
          duration={500}
          className=' button buttonWhite text'>
          Devis en ligne
        </Link>
      </div>

      <Image
        src={photo}
        alt='home'
        width={1920}
        height={1080}
        className={`${styles.homeImage} ${animationClass}`}
        priority
      />
    </div>
  );
};

export default HomeImageWrapper;
