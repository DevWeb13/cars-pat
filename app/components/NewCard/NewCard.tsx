import React from 'react';
import styles from './newCard.module.css';
import Image from 'next/image';

interface NewCardProps {
  type: string;
}

const NewCard = ({ type }: NewCardProps) => {
  return (
    <button className={styles.newCard}>
      <div className={styles.newCardImage + ' ' + styles[type]} />
      <div className={styles.newCardText}>
        <h2 className='text'>Carrosserie</h2>
        <div className={styles.newCardArrow} />
      </div>
    </button>
  );
};

export default NewCard;
