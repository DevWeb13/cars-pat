import React from 'react';
import styles from './footer.module.css';

interface FooterProps {
  // props here
}

import Image from 'next/image';
import logo from '@/public/assets/logoWhite.svg';
import Link from 'next/link';
import SectionContentWrap from '@/components/layout/SectionContentWrap/SectionContentWrap';

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.container + ' ' + 'textFooter'}>
      <div className={styles.sectionContent}>
        <Image
          src={logo}
          alt='Cars Pat'
        />
      </div>
      <SectionContentWrap footer>
        <div className={styles.sectionContent}>
          <h3 className='textBold'>Contact</h3>
          <p className={styles.address}>
            1 Rue Denis Magdelon <br />
            13009 Marseille
          </p>
          <p className={styles.phone}>
            <Link
              className={styles.linkFooter}
              href='tel:+33491402801'>
              04 91 40 28 01
            </Link>
          </p>
          <p className={styles.phone}>
            <Link
              className={styles.linkFooter}
              href='tel:+33615614914'>
              06 15 61 49 14
            </Link>
          </p>
          <p className={styles.email}>
            <Link
              className={styles.linkFooter}
              href='mailto:carrosse-pat@hotmail.fr'>
              carrosse-pat@hotmail.fr
            </Link>
          </p>
        </div>
        <div className={styles.sectionContent}>
          <h3 className='textBold'>Horaires</h3>
          <p className={styles.hours}>
            Du lundi au vendredi <br />
            8h00 - 12h00 <br />
            14h00 - 18h30
          </p>
        </div>
        <div className={styles.sectionContent}>
          <h3 className='textBold'>Réseaux sociaux</h3>
          <div className={styles.socialMediaLinkWrapper}>
            <Link
              className={styles.linkFooter}
              href='https://www.facebook.com/profile.php?id=100057464648961'
              target='_blank'
              rel='noreferrer'>
              <Image
                src='assets/facebook.svg'
                alt='facebook'
                width={35}
                height={35}
              />
            </Link>
            <Link
              className={styles.linkFooter}
              href='https://www.tiktok.com/@cars_pat'
              target='_blank'
              rel='noreferrer'>
              <Image
                src='assets/tiktok.svg'
                alt='instagram'
                width={35}
                height={35}
              />
            </Link>
          </div>
        </div>
      </SectionContentWrap>

      <div className={styles.sectionContent}>
        <Link
          className={styles.linkFooter}
          href='/legalNotice'>
          Mentions légales
        </Link>
      </div>
      <div className={styles.sectionContent + ' ' + styles.logoLRD}>
        <Link
          className={styles.linkFooter}
          href='https://www.lareponsedev.com/'
          target='_blank'>
          Design et développement par LaReponseDev
          <Image
            src='/assets/photosWebp750*500/logo/logoLRD.png'
            alt='LaReponseDev'
            width={30}
            height={30}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
