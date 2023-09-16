import React, { useEffect, useRef, useState } from 'react';
import styles from './card.module.css';
import ImageGallery from 'react-image-gallery';

interface CardProps {
  cardData: {
    title: string;
    text: string;
    icon: string;
  };
}

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    originalHeight: 600,
    originalWidth: 1000,
    thumbnailHeight: 150,
    thumbnailWidth: 250,
    originalAlt: 'test',
    thumbnailAlt: 'test',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    originalHeight: 600,
    originalWidth: 1000,
    thumbnailHeight: 150,
    thumbnailWidth: 250,
    originalAlt: 'test',
    thumbnailAlt: 'test',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    originalHeight: 600,
    originalWidth: 1000,
    thumbnailHeight: 150,
    thumbnailWidth: 250,
    originalAlt: 'test',
    thumbnailAlt: 'test',
  },
];

const Card: React.FC<CardProps> = ({ cardData }) => {
  const { title, text, icon } = cardData;
  const [isExpanded, setIsExpanded] = useState(false);
  const [textHeight, setTextHeight] = useState('120px');
  const [imageGalleryHeight, setImageGalleryHeight] = useState('0px');
  const cardTextRef = useRef<HTMLDivElement>(null);
  const imageGalleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardTextRef.current && imageGalleryRef.current) {
      const scrollTextHeight = `${cardTextRef.current.scrollHeight}px`;
      setTextHeight(isExpanded ? scrollTextHeight : '120px');
      setTimeout(() => {
        const scrollImageGalleryHeight = `${imageGalleryRef.current?.scrollHeight}px`;
        setImageGalleryHeight(isExpanded ? scrollImageGalleryHeight : '0px');
      }, 300);
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
          ref={cardTextRef}
          className={`${styles.cardText} ${
            isExpanded ? styles.cardTextExpanded : ''
          }`}
          style={{
            height: textHeight,
          }}>
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
      <div
        className={`${styles.imageGallery} ${
          isExpanded ? styles.imageGalleryExpanded : ''
        }`}
        style={{
          height: imageGalleryHeight,
        }}
        ref={imageGalleryRef}>
        <ImageGallery
          items={images}
          autoPlay
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          showThumbnails={false}
        />
      </div>
    </article>
  );
};

export default Card;
