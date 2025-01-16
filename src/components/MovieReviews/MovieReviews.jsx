import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from '../../services/api';
import css from './MovieReviews.module.css';
import { useHttp } from '../hooks/useHttp';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews] = useHttp(fetchMovieReviewsById, movieId);

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
