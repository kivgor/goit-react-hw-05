import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  // console.log(location);
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
            state={location}
          >
            {movie.title} (
            {movie.release_date ? movie.release_date.slice(0, 4) : 'unknown'})
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
