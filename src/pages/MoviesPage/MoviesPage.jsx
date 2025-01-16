import { useState } from 'react';
import css from './MoviesPage.module.css';
import toast from 'react-hot-toast';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { useHttp } from '../../components/hooks/useHttp';
import { fetchMovieByQuery } from '../../services/api';

const MoviesPage = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies] = useHttp(fetchMovieByQuery, query);

  const handleChangeQuery = newQuery => {
    if (newQuery === query) {
      toast.error('Please change query!');
      return;
    }

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
