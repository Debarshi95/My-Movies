/* eslint-disable consistent-return */
import React from 'react';
import { request, headers } from '../config/config';

const useSearch = ({ query, type }) => {
  const [searchedData, setSearchedData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    const abortController = new AbortController();
    if (query === '') return;
    fetch(request.searchItem(query, type), {
      headers,
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setSearchedData(data.results);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
    return function cleanup() {
      abortController.abort();
    };
  }, [query, type]);

  return { isLoading, searchedData, error };
};

export default useSearch;
