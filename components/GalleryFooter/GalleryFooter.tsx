import React from 'react';
import styles from './galleryFooter.module.css';
import Image from 'next/image';

const GalleryFooter = () => {
  return (
    <footer className={styles.galleryFooter + ' ' + 'textBold'}>
      <div className={styles.footerText}>
        <p>
          Vous voulez en voir <span className='primaryColor'>plus?</span>
        </p>
        <p>
          Suivez nous sur les{' '}
          <span className='primaryColor'>réseaux sociaux</span>
        </p>
      </div>
      <div className={styles.socialMedia}>
        <a
          href='https://www.facebook.com/profile.php?id=100057464648961'
          target='_blank'
          rel='noreferrer'>
          <Image
            src='assets/facebook.svg'
            alt='facebook'
            width={35}
            height={35}
          />
        </a>
        <a
          href='https://www.tiktok.com/@cars_pat'
          target='_blank'
          rel='noreferrer'>
          <Image
            src='assets/tiktok.svg'
            alt='instagram'
            width={35}
            height={35}
          />
        </a>
      </div>
    </footer>
  );
};

export default GalleryFooter;
