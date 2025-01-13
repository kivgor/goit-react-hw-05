import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink
            to={'/movies/' + movie.id.toString()}
            className={buildLinkClass}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
