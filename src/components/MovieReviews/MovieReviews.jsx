import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from '../../services/api';
import css from './MovieReviews.module.css';
import { useHttp } from '../hooks/useHttp';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, isLoading, isError] = useHttp(
    fetchMovieReviewsById,
    movieId
  );

  return (
    <>
      {isLoading && <p>Loading data, please wait...</p>}
      {isError && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {!movieReviews.length && <h2>No information about reviews!</h2>}
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
