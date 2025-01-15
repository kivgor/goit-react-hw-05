import { useEffect, useState } from 'react';
import css from './MoviesPage.module.css';
import toast from 'react-hot-toast';
import { fetchMovieByQuery } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    const getMoviesData = async () => {
      try {
        // setIsLoading(true);
        // setIsError(false);
        const { results } = await fetchMovieByQuery(query);
        setMovies(results);

        // setImageList(prev => [...prev, ...results]);
        // setTotalPages(total_pages);
        // if (total_pages === 0) {
        //   toast.error('No images by query: ' + query);
        //   return;
        // }
      } catch (error) {
        console.log(error);
        // setIsError(true);
      } finally {
        // setIsLoading(false);
      }
    };
    getMoviesData();
  }, [query]);

  const handleChangeQuery = newQuery => {
    if (newQuery === query) {
      toast.error('Please change query!');
      return;
    }
    // setQuery(newQuery);
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
    // setImageList([]);
    // setPage(1);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (value === '') {
      toast.error('Please enter query!');
      return;
    }
    handleChangeQuery(value);
    // evt.target.reset();
  };

  if (!movies) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="search"
          onChange={evt => setValue(evt.target.value.toLowerCase().trim())}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
