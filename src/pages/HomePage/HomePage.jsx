import { useHttp } from '../../components/hooks/useHttp';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../services/api';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, isLoading, isError] = useHttp(fetchTrendingMovies);

  return (
    <>
      <p className={css.title}>Trending today</p>
      {isLoading && <p>Loading data, please wait...</p>}
      {isError && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default HomePage;
