import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

function Banner({ bannerPath, title, genres, tagline }) {
  return (
    <div className="banner__root">
      <div className="banner__backdrop">
        <img
          src={`${process.env.REACT_APP_BACKDROP_IMAGE}${bannerPath}`}
          alt={title}
          height="100%"
          loading="lazy"
        />
      </div>
      <div className="banner__movieDetails">
        <h2>{title}</h2>
        {tagline ? <h3>{tagline}</h3> : null}
        <div className="banner__genres">
          {genres?.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
Banner.propTypes = {
  bannerPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.instanceOf(Array).isRequired,
  tagline: PropTypes.string.isRequired,
};
export default memo(Banner);
