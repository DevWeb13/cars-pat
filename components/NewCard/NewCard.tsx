import React from 'react';
import styles from './newCard.module.css';
import Image from 'next/image';

interface NewCardProps {
  type: string;
  text: string;
  id: string;
}

const NewCard = ({ type, text, id }: NewCardProps) => {
  return (
    <button
      className={styles.newCard}
      id={id}>
      <div className={styles.newCardImageWrapper}>
        <Image
          src={`/assets/photosWebp750*500/${type}.webp`}
          alt={type}
          width={384}
          height={256}
          className={styles.newCardImage}
        />
      </div>
      <div className={styles.newCardText}>
        <h2 className='text'>{text}</h2>
        <div className={styles.newCardArrow} />
      </div>
    </button>
  );
};

export default NewCard;
