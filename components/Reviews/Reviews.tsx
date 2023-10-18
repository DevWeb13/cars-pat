import { useState } from 'react';
import RatingComponent from '../RatingComponent/RatingComponent';
import styles from './reviews.module.css';
import Review from '../Review/Review';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import SectionContentWrap from '../layout/SectionContentWrap/SectionContentWrap';
import Button from '../ui/Button/Button';
import SectionContentColumn from '../layout/SectionContentColumn/SectionContentColumn';
import Loader from '../Loader/Loader';

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

  const { data, status } = useQuery(['reviews'], () => fetchReviews());

  const renderContent = () => {
    switch (status) {
      case 'error':
        return (
          <p className={styles.error}>
            Erreur lors de l&apos;affichage des avis
          </p>
        );

      case 'loading':
        return <Loader />;

      case 'success':
        return (
          <SectionContentColumn>
            <p className={`${styles.averageRating} sousTitre`}>
              {data?.averageRating}
            </p>
            <div className={styles.ratingWrapper}>
              <RatingComponent value={data?.averageRating || 5} />
            </div>
            <p className={`${styles.totalReviews} text`}>
              {data?.totalReviews} avis
            </p>
            <SectionContentWrap>
              {data?.reviews.map((review, index) => (
                <Review
                  key={index + review.author_name}
                  review={review}
                />
              ))}
            </SectionContentWrap>
          </SectionContentColumn>
        );

      default:
        return null; // ou un autre contenu par défaut si nécessaire
    }
  };

  return (
    <>
      {renderContent()}
      <SectionContentWrap reviews>
        <Link
          className='button'
          href='https://www.google.fr/maps/place/Cars+Pat/@43.2483415,5.3982268,17z/data=!4m8!3m7!1s0x12c9b884f41d09d5:0x967b25d3c34e14c3!8m2!3d43.2483415!4d5.4008017!9m1!1b1!16s%2Fg%2F1tf20zt9?entry=ttu'
          target='_blank'>
          <Button text='Voir tous les avis' />
        </Link>
        <Link
          className='button'
          href='https://www.google.fr/maps/place/Cars+Pat/@43.2483415,5.3982268,17z/data=!4m8!3m7!1s0x12c9b884f41d09d5:0x967b25d3c34e14c3!8m2!3d43.2483415!4d5.4008017!9m1!1b1!16s%2Fg%2F1tf20zt9?entry=ttu'
          target='_blank'>
          <Button
            text='Poster un avis'
            color='white'
            animate
          />
        </Link>
      </SectionContentWrap>
    </>
  );
}
