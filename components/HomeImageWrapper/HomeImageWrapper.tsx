import React from 'react';
import Image from 'next/image';
import styles from './homeImageWrapper.module.css';
import { Link } from 'react-scroll';

import Button from '../ui/Button/Button';

interface HomeImageWrapperProps {
  photo: string;
  isFading: boolean;
}

const HomeImageWrapper: React.FC<HomeImageWrapperProps> = ({
  photo,
  isFading,
}) => {
  const animationClass = isFading ? 'fadeOut' : 'fadeIn';

  return (
    <div className={`${styles.homeImageWrapper}`}>
      <div className={styles.linkWrapper}>
        <Link
          href='/'
          to={'services'}
          smooth={true}
          offset={-60}
          duration={500}>
          <Button text='Découvrez nos services' />
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
          />
        </Link>
      </div>

      <Image
        src={photo}
        alt='home'
        width={967}
        height={694}
        className={`${styles.homeImage} ${animationClass}`}
        priority
      />
    </div>
  );
};

export default HomeImageWrapper;
