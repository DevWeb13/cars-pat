import React from 'react';
import styles from './homeAside.module.css';
import Link from 'next/link';

const HomeAside = () => {
  return (
    <aside className={styles.homeAside}>
      <div className={styles.homeAsideTitleWrapper}>
        <h2 className='titre'>Cars Pat</h2>
      </div>
      <div className={styles.homeAsideTextWrapper}>
        <h3 className='sousTitre'>{'Carrosserie'.toUpperCase()}</h3>
        <h3 className='sousTitre'>{'Peinture'.toUpperCase()}</h3>
        <h3 className='sousTitre'>
          {'Remplacement'.toUpperCase()}
          <br /> {'pare-brise'.toUpperCase()}
        </h3>
        <h3 className='sousTitre'>
          {'Franchise prise'.toUpperCase()} <br />
          {'en charge*'.toUpperCase()}
        </h3>
        <h3 className='sousTitre'>
          {'Prêt de véhicule'.toUpperCase()} <br />
          {'offert*'.toUpperCase()}
        </h3>
      </div>
      <div className={styles.homeAsideFooterWrapper}>
        <Link
          href={'mailto:carrosse-pat@hotmail.fr'}
          target='_blank'
          className={'textBold' + ' ' + styles.mail}>
          carrosse-pat@hotmail.fr
        </Link>
        <Link
          href={'tel:+33491402801'}
          target='_blank'
          className={'primaryColor sousTitre' + ' ' + styles.tel}>
          04 91 40 28 01
        </Link>
        <Link
          href={'tel:+33491402801'}
          target='_blank'
          className={'primaryColor sousTitre' + ' ' + styles.tel}>
          06 15 61 49 14
        </Link>
      </div>
    </aside>
  );
};

export default HomeAside;
