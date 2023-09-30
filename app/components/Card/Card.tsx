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

// https://i.ibb.co/ZHxbpW8/porsche-Rouge-Avec-Fond.jpg
// https://i.ibb.co/q79qRhL/Porsche-Grise.jpg
// https://i.ibb.co/qNwrL0J/porsche-Bleu-removebg-preview.png
// https://i.ibb.co/ZgYG3hY/porsche-Bleu.jpg
// https://i.ibb.co/DV81Fh4/porsche.png
// https://i.ibb.co/phrv6Vs/mustang.png
// https://i.ibb.co/4Mfc4vQ/Harley-removebg-preview.png
// https://i.ibb.co/ydgpNxJ/Harley.jpg
const images = [
  {
    original: 'https://i.ibb.co/ZHxbpW8/porsche-Rouge-Avec-Fond.jpg',
    thumbnail: 'https://i.ibb.co/ZHxbpW8/porsche-Rouge-Avec-Fond.jpg',
    originalHeight: 250,
    originalWidth: 400,
    thumbnailHeight: 200,
    thumbnailWidth: 200,
    originalAlt: 'test',
    thumbnailAlt: 'test',
  },
  {
    original: 'https://i.ibb.co/q79qRhL/Porsche-Grise.jpg',
    thumbnail: 'https://i.ibb.co/q79qRhL/Porsche-Grise.jpg',
    originalHeight: 250,
    originalWidth: 400,
    thumbnailHeight: 200,
    thumbnailWidth: 200,
    originalAlt: 'test',
    thumbnailAlt: 'test',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    originalHeight: 250,
    originalWidth: 400,
    thumbnailHeight: 200,
    thumbnailWidth: 200,
    originalAlt: 'test',
    thumbnailAlt: 'test',
  },
];

const Card: React.FC<CardProps> = ({ cardData }) => {
  const { title, text, icon } = cardData;
  const [isExpanded, setIsExpanded] = useState(false);
  const [textHeightInitial, setTextHeightInitial] = useState('');
  const [textHeight, setTextHeight] = useState('auto');
  const [imageDisplay, setImageDisplay] = useState(false);
  const cardTextRef = useRef<HTMLDivElement>(null);
  const imageGalleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardTextRef.current) {
      const textHeightInit = `${cardTextRef.current.clientHeight}px`;
      setTextHeightInitial(textHeightInit);
      setTextHeight(textHeightInit);
    }
  }, []);

  useEffect(() => {
    if (cardTextRef.current && imageGalleryRef.current) {
      // console.log(cardTextRef);
      const textHeightExpanded = `${cardTextRef.current.scrollHeight}px`;
      setTextHeight(isExpanded ? textHeightExpanded : textHeightInitial);
      isExpanded
        ? setTimeout(() => {
            setImageDisplay(isExpanded);
          }, 300)
        : setImageDisplay(isExpanded);
    }
  }, [isExpanded, textHeightInitial]);

  return (
    <article className='card'>
      <button
        className={styles.cardButton}
        onClick={() => setIsExpanded(!isExpanded)}>
        <div className={styles.cardTitle}>
          <div className={styles.cardTitleIcon + ' ' + styles[icon]}></div>
          <h3 className={`${styles.cardTitleText} textBold`}>{title}</h3>
        </div>
        <div
          ref={cardTextRef}
          className={`${styles.cardText} text ${
            isExpanded ? styles.cardTextExpanded : ''
          }`}
          style={{
            height: textHeight,
          }}>
          {text}
        </div>

        <div className={styles.seeAllWrapper}>
          <p className={`${styles.textFooter} textFooter`}>
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
        ref={imageGalleryRef}>
        {imageDisplay && (
          <ImageGallery
            items={images}
            autoPlay
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            showThumbnails={false}
          />
        )}
      </div>
    </article>
  );
};

export default Card;
