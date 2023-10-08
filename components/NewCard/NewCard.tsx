import React from 'react';
import styles from './newCard.module.css';
import Image from 'next/image';

interface NewCardProps {
  type: string;
  text: string;
}

const NewCard = ({ type, text }: NewCardProps) => {
  return (
    <button className={styles.newCard}>
      <div className={styles.newCardImage + ' ' + styles[type]} />
      <div className={styles.newCardText}>
        <h2 className='text'>{text}</h2>
        <div className={styles.newCardArrow} />
      </div>
    </button>
  );
};

export default NewCard;
