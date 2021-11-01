import React from 'react';
import PropTypes from 'prop-types';
import PosterCard from '../PosterCard/PosterCard';
import './Row.css';

function Row({ results, title }) {
  return (
    <div className="row__container">
      <h2>{title}</h2>
      <div className="row">
        {results.length > 0 ? (
          results.map((result) => <PosterCard key={result.id} item={result} />)
        ) : (
          <p>We donot have enough data to show</p>
        )}
      </div>
    </div>
  );
}
Row.propTypes = {
  results: PropTypes.objectOf(Array).isRequired,
  title: PropTypes.string.isRequired,
};
export default Row;
