import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from '../../services/api';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState('');

  useEffect(() => {
    if (!movieId) return;
    const getMovieReviews = async () => {
      const { results } = await fetchMovieReviewsById(movieId);
      setMovieReviews(results);
    };
    getMovieReviews();
  }, [movieId]);

  if (!movieReviews) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {!movieReviews.length && <h2>There are no reviews yet!</h2>}
      <ul className={css.list}>
        {movieReviews.map(review => (
          <li key={review.id} className={css.item}>
            <p className={css.bold}>{review.author}</p>
            <p className={css.smallText}>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieReviews;
