import React, { useEffect, useRef, useState } from 'react';
import styles from './card.module.css';

interface CardProps {
  cardData: {
    title: string;
    text: string;
    icon: string;
  };
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  const { title, text, icon } = cardData;
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState('120px');
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const scrollHeight = `${cardRef.current.scrollHeight}px`;
      setHeight(isExpanded ? scrollHeight : '120px');
    }
  }, [isExpanded]);

  return (
    <article className={styles.card}>
      <button
        className={styles.cardButton}
        onClick={() => setIsExpanded(!isExpanded)}>
        <div className={styles.cardTitle}>
          <div className={styles.cardTitleIcon + ' ' + styles[icon]}></div>
          <h3 className={styles.cardTitleText}>{title}</h3>
        </div>
        <div
          ref={cardRef}
          className={`${styles.cardText} ${
            isExpanded ? styles.cardTextExpanded : ''
          }`}
          style={{ height }}>
          {text}
        </div>
        <div className={styles.seeAllWrapper}>
          <p className={styles.textFooter}>
            {isExpanded ? 'Voir moins' : 'Voir plus'}
          </p>
          <div
            className={
              isExpanded
                ? styles.arrow + ' ' + styles.arrowReverse
                : styles.arrow
            }></div>
        </div>
      </button>
    </article>
  );
};

export default Card;
