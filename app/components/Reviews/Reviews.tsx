import { useEffect, useState } from 'react';
import RatingComponent from '../RatingComponent/RatingComponent';
import styles from './reviews.module.css';

type Review = {
  author_name: string;
  text: string;
  rating: number;
};

type ReviewsState = {
  reviews: Review[];
  averageRating: number | null;
  totalReviews: number | null;
};

export default function ReviewsPage() {
  const [state, setState] = useState<ReviewsState>({
    reviews: [],
    averageRating: null,
    totalReviews: null,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/reviews')
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setState({
            reviews: data.reviews,
            averageRating: data.averageRating,
            totalReviews: data.totalReviews,
          });
        }
      })
      .catch((err) => {
        setError(`Erreur lors de la récupération des avis: ${err.message}`);
      });
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <p className={styles.averageRating}>{state.averageRating}</p>
          <RatingComponent value={state.averageRating || 5} />
          <p>{state.totalReviews} avis</p>
          {state.reviews.map((review, index) => (
            <div key={index}>
              <h3>{review.author_name}</h3>
              <p>{review.text}</p>
              <p>Rating: {review.rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
