import React from "react";
import PropTypes from "prop-types";
import useRequest from "../hooks/useRequest";
import Loader from "../Loader";

function withRow(WrappedComponent) {
  const HOC = ({ url, title }) => {
    const { isLoading, apiData } = useRequest({ url });
    const results = apiData.results || apiData.parts || apiData.cast;
    return (
      <>
        {isLoading && <Loader />}
        {results && <WrappedComponent results={results} title={title} />}
      </>
    );
  };
  HOC.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
  };
  return HOC;
}

export default withRow;
