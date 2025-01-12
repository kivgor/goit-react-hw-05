import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data.results);
    };
    getMovie();
  }, []);
  // console.log(movies);

  return (
    <>
      <p className={css.title}>Trending today</p>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
