import React from 'react';
import styles from './galleryFooter.module.css';
import Image from 'next/image';
import SocialMedia from '../SocialMedia/SocialMedia';

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
      <SocialMedia />
    </footer>
  );
};

export default GalleryFooter;
