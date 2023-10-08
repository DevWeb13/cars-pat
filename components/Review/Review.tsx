import React from 'react';
import styles from './review.module.css';
import { Review as ReviewType } from '../Reviews/Reviews';
import Image from 'next/image';
import RatingComponent from '../RatingComponent/RatingComponent';
import Link from 'next/link';

type ReviewProps = {
  review: ReviewType;
};

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <article className={styles.review}>
      <Link
        href={review.author_url}
        target='_blank'
        className='link'>
        <div className={styles.reviewHeader}>
          <Image
            className={styles.authorPhoto}
            src={review.profile_photo_url}
            alt={review.author_name}
            width={50}
            height={50}
          />

          <div className={styles.nameWrapper}>
            <h3 className='sousTitre'>{review.author_name}</h3>

            <p className='textFooter'>{review.relative_time_description}</p>
          </div>
        </div>
      </Link>
      <div className={styles.ratingWrapper}>
        <RatingComponent value={review.rating} />
      </div>
      <p className='text'>{review.text}</p>
    </article>
  );
};

export default Review;
