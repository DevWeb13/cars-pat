import React from 'react';
import styles from './companyAnniversary.module.css';

interface CompanyAnniversaryProps {
  // props here
}

const CompanyAnniversary: React.FC<CompanyAnniversaryProps> = () => {
  const calculateYears = () => {
    const startDate = new Date(1997, 3, 1); // months are 0-indexed
    const currentDate = new Date();
    return currentDate.getFullYear() - startDate.getFullYear();
  };

  const yearsOpen = calculateYears();
  return (
    <div className={styles.companyAnniversary}>
      <h1 className={'titre' + ' ' + styles.title}>Carrosserie Peinture</h1>
      <h2 className={'sousTitre' + ' ' + styles.subTitle}>
        <span className='primaryColor'>{yearsOpen} ans</span> de{' '}
        <span className='primaryColor'>confiance</span> et d&apos;{' '}
        <span className='primaryColor'>expertise !</span>
      </h2>
      {/* <br className={styles.text} />
      <p className={'sousTitre' + ' ' + styles.text}>
        Depuis le <span className='primaryColor'>1er avril 1997</span>, nous
        mettons notre expertise en{' '}
        <span className='primaryColor'>carrosserie</span> et en{' '}
        <span className='primaryColor'>peinture</span> automobile à votre
        disposition. <br />
        <br />
        <span className='primaryColor'>Merci</span> de nous faire confiance !
      </p> */}
    </div>
  );
};

export default CompanyAnniversary;
