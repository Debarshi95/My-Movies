import React from "react";
import { request, headers } from "../../config/config";

const useSearch = ({ query, type }) => {
  const [searchedData, setSearchedData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const abortController = new AbortController();
    if (query === "") return;
    fetch(request.searchItem(query, type), {
      headers: headers,
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setSearchedData(data.results);
      })
      .catch((err) => console.log(err));
    return function cleanup() {
      abortController.abort();
    };
  }, [query]);

  return { isLoading, searchedData };
};

export default useSearch;
