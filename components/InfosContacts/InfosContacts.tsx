import React from 'react';
import styles from './infosContacts.module.css';

import InfoContact from '../InfoContact/InfoContact';
import Link from 'next/link';

interface InfosContactsProps {
  // props here
}

const InfosContacts: React.FC<InfosContactsProps> = () => {
  return (
    <>
      <div className={styles.container}>
        <InfoContact
          logo='/assets/clock.svg'
          alt='clock'
          title='HORAIRES'
          textLines={['Lundi - Vendredi', '08H00 - 12H00', '14H00 - 18H30']}
        />
        <Link
          target='_blank'
          href='tel:+33491402801'
          className='link'>
          <InfoContact
            logo='/assets/phone.svg'
            alt='phone'
            title='TÉLÉPHONE'
            textLines={['04-91-40-28-01']}
          />
        </Link>
        <Link
          target='_blank'
          href='mailto:carrosse-pat@hotmail.fr'
          className='link'>
          <InfoContact
            logo='/assets/mail.svg'
            alt='mail'
            title='E-MAIL'
            textLines={['carrosse-pat@hotmail.fr']}
          />
        </Link>
        <Link
          target='_blank'
          href='https://www.google.fr/maps/place/Cars+Pat/@43.2483917,5.3983134,17z/data=!4m15!1m8!3m7!1s0x12c9b884f41a612d:0x5b0f382c309b6090!2s1+Rue+Denis+Magdelon,+13009+Marseille!3b1!8m2!3d43.2483917!4d5.4008883!16s%2Fg%2F11cs7q5f4j!3m5!1s0x12c9b884f41d09d5:0x967b25d3c34e14c3!8m2!3d43.2483415!4d5.4008017!16s%2Fg%2F1tf20zt9?entry=ttu'
          className='link'>
          <InfoContact
            logo='/assets/position.svg'
            alt='address'
            title='ADRESSE'
            textLines={['1 Rue Denis Magdelon', '13009 Marseille']}
          />
        </Link>
      </div>
      <iframe
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14137.182395999138!2d5.400888!3d43.248392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b884f41d09d5%3A0x967b25d3c34e14c3!2sCars%20Pat!5e1!3m2!1sfr!2sfr!4v1695283837705!5m2!1sfr!2sfr'
        width={280}
        height={269}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        className={styles.map}
      />
      <iframe
        title='map'
        src='https://www.google.com/maps/embed?pb=!4v1695311394340!6m8!1m7!1sW9TDgMNjV8IejcCtJpTTzA!2m2!1d43.24829969231534!2d5.400771836629596!3f26.714348!4f0!5f0.7820865974627469'
        width={280}
        height={269}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        className={styles.map}
      />
    </>
  );
};

export default InfosContacts;
