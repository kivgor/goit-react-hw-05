import { fetchMovieCastById } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';
import { ImUser } from 'react-icons/im';
import { useHttp } from '../hooks/useHttp';

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast] = useHttp(fetchMovieCastById, movieId);

  if (!movieCast) {
    return <h2>Loading...</h2>;
  }

  movieCast.length;
  return (
    <>
      {!movieCast.length && <h2>No information about cast!</h2>}
      <ul className={css.listThumb}>
        {movieCast.map(movie => (
          <li key={movie.cast_id} className={css.itemThumb}>
            {movie.profile_path ? (
              <img
                src={'https://image.tmdb.org/t/p/w500/' + movie.profile_path}
                width="200"
              />
            ) : (
              <div className={css.imUserThumb}>
                <ImUser size={100} color="darkblue" />
              </div>
            )}

            <p>
              <span className={css.bold}>{movie.character}</span> - {movie.name}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
