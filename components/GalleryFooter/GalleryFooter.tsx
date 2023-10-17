import React, { useEffect } from 'react';
import styles from './galleryFooter.module.css';
import Link from 'next/link';
import SocialMedia from '../SocialMedia/SocialMedia';
import Script from 'next/script';

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
