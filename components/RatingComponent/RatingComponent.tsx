import React from 'react';
import styles from './ratingComponent.module.css';

interface RatingComponentProps {
  value: number;
}

const RatingComponent: React.FC<RatingComponentProps> = ({ value }) => {
  const max = 5;

  const isCurrentStar = (index: number): boolean => {
    return value > index && value <= index + 1;
  };

  const getStarPercentage = (index: number): string => {
    return Math.max(0, Math.min(100, (value - index) * 100)) + '%';
  };
  const getStarClass = (index: number): string => {
    const adjustedIndex = index + 1;
    const classNames = [styles.star];
    if (value >= adjustedIndex) {
      classNames.push(styles.starFilled);
    } else if (value > index && value < adjustedIndex) {
      classNames.push(styles.starGradient);
    }
    return classNames.join(' ');
  };

  return (
    <div className={styles.app}>
      <div className={styles.starsWrapper}>
        {Array.from({ length: max }).map((_, i) => (
          <svg
            key={i}
            width={`${100 / max}%`}
            height={`${100 / max}%`}
            viewBox='0 0 510 510'>
            {isCurrentStar(i) && (
              <defs>
                <linearGradient
                  id='grad'
                  x1='0%'
                  y1='0%'
                  x2='100%'
                  y2='0%'>
                  <stop
                    offset='0%'
                    className={styles.gradientStart}
                  />
                  <stop
                    offset={getStarPercentage(i)}
                    className={styles.gradientStart}
                  />
                  <stop
                    offset={getStarPercentage(i)}
                    className={styles.gradientEnd}
                  />
                  <stop
                    offset='100%'
                    className={styles.gradientEnd}
                  />
                </linearGradient>
              </defs>
            )}
            <polygon
              points='255,402.212 412.59,497.25 370.897,318.011 510,197.472 326.63,181.738 255,12.75 183.371,181.738 0,197.472 139.103,318.011 97.41,497.25'
              className={getStarClass(i)}
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default RatingComponent;
