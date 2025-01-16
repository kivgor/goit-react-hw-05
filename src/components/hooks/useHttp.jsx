import { useEffect, useState } from 'react';

export const useHttp = (func, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await func(query);
        if (data.results) {
          setData(data.results);
        } else {
          setData(data);
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [func, query]);

  return [data, isLoading, isError];
};
