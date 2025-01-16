import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day', {
    params: {
      api_key: 'c3b14d60da4c75223be29cc6da55cbbb',
    },
  });

  return data;
};

export const fetchMoviesById = async movieId => {
  const { data } = await axios.get('/movie/' + movieId, {
    params: {
      api_key: 'c3b14d60da4c75223be29cc6da55cbbb',
    },
  });

  return data;
};

export const fetchMovieCastById = async movieId => {
  const { data } = await axios.get('/movie/' + movieId + '/credits', {
    params: {
      api_key: 'c3b14d60da4c75223be29cc6da55cbbb',
    },
  });

  return data.cast;
};

export const fetchMovieReviewsById = async movieId => {
  const { data } = await axios.get('/movie/' + movieId + '/reviews', {
    params: {
      api_key: 'c3b14d60da4c75223be29cc6da55cbbb',
    },
  });

  return data;
};

export const fetchMovieByQuery = async query => {
  const { data } = await axios.get('/search/movie', {
    params: {
      api_key: 'c3b14d60da4c75223be29cc6da55cbbb',
      query,
    },
  });

  return data;
};
