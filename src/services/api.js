import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day', {
    params: {
      api_key: 'c3b14d60da4c75223be29cc6da55cbbb',
      // language: 'en-US',
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
