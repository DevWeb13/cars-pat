import React from 'react';
import styles from './homeAside.module.css';
import LinkNext from 'next/link';
import { Link } from 'react-scroll';

const HomeAside = () => {
  return (
    <aside className={styles.homeAside}>
      <div className={styles.homeAsideTitleWrapper}>
        <h2 className='titre'>Cars Pat</h2>
      </div>
      <div className={styles.homeAsideTextWrapper}>
        <Link
          href='/'
          to={'carrosserie'}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link}>
          <h3 className='sousTitre'>{'Carrosserie'.toUpperCase()}</h3>
        </Link>
        <Link
          href='/'
          to={'peinture'}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link}>
          <h3 className='sousTitre'>{'Peinture'.toUpperCase()}</h3>
        </Link>
        <Link
          href='/'
          to={'pareBrise'}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link}>
          <h3 className={styles.none + ' ' + 'sousTitre'}>
            {'Remplacement'.toUpperCase()}
            <br /> {'pare-brise'.toUpperCase()}
          </h3>
        </Link>
        <Link
          href='/'
          to={'franchise'}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link}>
          <h3 className={styles.none + ' ' + 'sousTitre'}>
            {'Franchise prise'.toUpperCase()} <br />
            {'en charge*'.toUpperCase()}
          </h3>
        </Link>
        <Link
          href='/'
          to={'pret'}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.link}>
          <h3 className={styles.none + ' ' + 'sousTitre'}>
            {'Prêt de véhicule'.toUpperCase()} <br />
            {'offert*'.toUpperCase()}
          </h3>
        </Link>
      </div>
      <div className={styles.homeAsideFooterWrapper}>
        <LinkNext
          href={'mailto:carrosse-pat@hotmail.fr'}
          target='_blank'
          className={'textBold' + ' ' + styles.mail}>
          carrosse-pat@hotmail.fr
        </LinkNext>
        <LinkNext
          href={'tel:+33491402801'}
          target='_blank'
          className={'sousTitre' + ' ' + styles.tel}>
          04 91 40 28 01
        </LinkNext>
        <LinkNext
          href={'tel:+33615614914'}
          target='_blank'
          className={'sousTitre' + ' ' + styles.tel + ' ' + styles.none}>
          06 15 61 49 14
        </LinkNext>
      </div>
    </aside>
  );
};

export default HomeAside;
