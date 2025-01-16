import { useRef } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesById } from '../../services/api';
import css from './MovieDetailsPage.module.css';
import clsx from 'clsx';
import { useHttp } from '../../components/hooks/useHttp';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie] = useHttp(fetchMoviesById, movieId);

  const location = useLocation();
  const goBackRef = useRef(location.state) ?? '/movies';

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const buildLinkGoBackClass = ({ isActive }) => {
    return clsx(css.linkGoBack, isActive && css.active);
  };

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={css.pageThumb}>
      <NavLink to={goBackRef.current} className={buildLinkGoBackClass}>
        Go Back
      </NavLink>
      <h2>
        {movie.title}
        {movie.release_date && <span> ({movie.release_date.slice(0, 4)})</span>}
      </h2>
      <div className={css.movieThumb}>
        <img
          className={css.img}
          src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path}
          alt={movie.title}
          width="500"
        />
        <div className={css.overviewThumb}>
          <p>
            <span className={css.bold}>User score:</span> {movie.vote_average}
          </p>
          <p>
            <span className={css.bold}>Overview:</span> {movie.overview}
          </p>
          <div className={css.genresThumb}>
            <p>
              <span className={css.bold}>Genres:</span>
            </p>
            {movie.genres && (
              <ul className={css.listThumb}>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <p>
        <span className={css.bold}>Additional information</span>
      </p>
      <ul>
        <li>
          <NavLink to="cast" className={buildLinkClass}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
