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
      <h2 className='sousTitre'>
        <span className='primaryColor'>{yearsOpen}</span> ans de{' '}
        <span className='primaryColor'>confiance</span> et d&apos;
        <span className='primaryColor'>expertise</span> !
      </h2>
      {/* <p>
        Depuis le 1er avril 1997, nous mettons notre expertise en carrosserie et
        peinture automobile à votre disposition. Merci de nous faire confiance.
      </p> */}
    </div>
  );
};

export default CompanyAnniversary;
