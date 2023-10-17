import React, { useEffect } from 'react';
import styles from './galleryFooter.module.css';
import Link from 'next/link';
import SocialMedia from '../SocialMedia/SocialMedia';
import Script from 'next/script';

const GalleryFooter = () => {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://www.tiktok.com/embed.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <footer className={styles.galleryFooter + ' ' + 'textBold'}>
      <blockquote
        className='tiktok-embed'
        data-unique-id='cars_pat'
        data-embed-type='creator'
        style={{ maxWidth: 780, minWidth: 288 }}
        cite={`https://www.tiktok.com/@cars_pat`}>
        <section>
          <Link
            target='_blank'
            href='https://www.tiktok.com/@cars_pat?refer=creator_embed'>
            @cars_pat
          </Link>
        </section>
      </blockquote>
      <Script
        src='https://www.tiktok.com/embed.js'
        strategy='lazyOnload'
      />
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
