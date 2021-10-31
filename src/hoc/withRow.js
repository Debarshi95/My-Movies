import React from 'react';
import PropTypes from 'prop-types';
import useRequest from '../hooks/useRequest';

function withRow(WrappedComponent) {
  const HOC = ({ url, title }) => {
    const { apiData } = useRequest({ url });
    const results = apiData?.results || apiData?.parts || apiData?.cast;
    return <>{results && <WrappedComponent results={results} title={title} />}</>;
  };
  HOC.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  return HOC;
}

export default withRow;
