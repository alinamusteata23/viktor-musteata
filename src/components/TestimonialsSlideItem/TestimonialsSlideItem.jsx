import styles from './TestimonialsSlideItem.module.scss';

import '../../sections/Testimonials/Testimonials.css';

const TestimonialsSlideItem = ({
  fullStars,
  hasHalfStar,
  author,
  rating,
  comment,
}) => {
  return (
    <>
      <h3 className={styles.title}>{author}</h3>

      <div className={styles.ratingContainer}>
        {Array.from({ length: fullStars }).map((_, index) => (
          <svg key={index} className={styles.svgContainer + ' ' + styles.star}>
            <use href="/sprite.svg#icon-Star" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg className={styles.svgContainer + ' ' + styles.starHalf}>
            <use
              href="/sprite.svg#icon-Star"
              className={styles.starStrokeTop}
            />
            <use href="/sprite.svg#icon-Star" className={styles.starFillHalf} />
          </svg>
        )}

        <p className={styles.rating}>{rating}</p>
      </div>

      <p className={styles.comment}>{comment}</p>
    </>
  );
};

export default TestimonialsSlideItem;
