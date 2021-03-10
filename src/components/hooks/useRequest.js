import React from "react";
import { headers } from "../../config/config";

const useRequest = ({ url }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [apiData, setApiData] = React.useState({});

  React.useEffect(() => {
    const abortController = new AbortController();

    fetch(url, {
      headers: headers,
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.status_message) {
          throw Error(data.status_message);
        }
        setApiData(data);
      })
      .catch((err) => {
        if (err instanceof DOMException) return;
        setError(err);
        setIsLoading(false);
      });

    return function cleanup() {
      abortController.abort();
    };
  }, [url]);
  return { isLoading, apiData, error };
};

export default useRequest;
