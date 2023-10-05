import { useState } from 'react';
import RatingComponent from '../RatingComponent/RatingComponent';
import styles from './reviews.module.css';
import Review from '../Review/Review';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export type Review = {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
};

type ReviewsState = {
  reviews: Review[];
  averageRating: number | null;
  totalReviews: number | null;
};

export default function ReviewsPage() {
  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data: ReviewsState = await res.json();
      return data;
    } catch (error) {
      console.error('An error occurred while fetching data: ', error);
    }
  };

  const { data, error } = useQuery(['reviews'], () => fetchReviews());

  // console.log({ data });

  return (
    <>
      {error ? (
        <p>{(error as Error).message}</p>
      ) : (
        <>
          <p className={styles.averageRating}>{data?.averageRating}</p>
          <div className={styles.ratingWrapper}>
            <RatingComponent value={data?.averageRating || 5} />
          </div>
          <p className={`${styles.totalReviews} text`}>
            {data?.totalReviews} avis
          </p>
          <div className='sectionContent wrap'>
            {data?.reviews.map((review, index) => (
              <Review
                key={index}
                review={review}
              />
            ))}
          </div>
          <div className='sectionContent'>
            <Link
              className='button'
              href='https://www.google.fr/maps/place/Cars+Pat/@43.2483415,5.3982268,17z/data=!4m8!3m7!1s0x12c9b884f41d09d5:0x967b25d3c34e14c3!8m2!3d43.2483415!4d5.4008017!9m1!1b1!16s%2Fg%2F1tf20zt9?entry=ttu'
              target='_blank'>
              <p>Voir tous les avis</p>
              <p>-----</p>
              <p>Poster un avis</p>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
