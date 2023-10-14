import React from 'react';
import styles from './footer.module.css';
import SectionContentWrap from '@/components/layout/SectionContentWrap/SectionContentWrap';

interface FooterProps {
  // props here
}

import Image from 'next/image';
import logo from '@/public/assets/logoWhite.svg';

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt='Cars Pat'
          />
        </div>
        <div className={styles.contact}>
          <h3 className={styles.title}>Contact</h3>
          <p className={styles.address}>
            1 Rue Denis Magdelon <br />
            13009 Marseille
          </p>
          <p className={styles.phone}>
            <a href='tel:+33491402801'>04 91 40 28 01</a>
          </p>
          <p className={styles.email}>
            <a href='mailto:carrosse-pat@hotmail.fr'>carrosse-pat@hotmail.fr</a>
          </p>
        </div>
        <div className={styles.opening}>
          <h3 className={styles.title}>Horaires</h3>
          <p className={styles.hours}>
            Du lundi au vendredi <br />
            8h00 - 12h00 <br />
            14h00 - 18h30
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
