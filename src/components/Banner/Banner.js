import React from 'react';
import PropTypes from 'prop-types';
import { BACKDROP_SIZE, IMAGE_URL, POSTER_SIZE } from '../../config/config';
import './Banner.css';
import LazyImage from '../LazyImage/LazyImage';

function Banner({ data }) {
  const releaseYear = data?.release_date?.split('-')[0] || data?.last_air_date?.split('-')[0];

  return (
    <div className="banner">
      <div className="banner__backdrop">
        <LazyImage
          url={`${IMAGE_URL}/${BACKDROP_SIZE}/${data.backdrop_path}`}
          alt={`${data.name || data.title}`}
          height="100%"
        />
      </div>
      <div className="banner__posterContainer">
        <LazyImage
          url={`${IMAGE_URL}/${POSTER_SIZE}/${data.poster_path}`}
          alt={`${data.name || data.title}`}
          height="100%"
          width="45%"
        />
        <div className="banner__movieDetails">
          <h2>
            {data.title || data.name}
            <span>{releaseYear === null ? `-` : ` (${releaseYear})`}</span>
          </h2>
          {data.tagline ? <h4>{data.tagline}</h4> : null}
          <div className="banner__genres">
            {data.genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
            <p className="banner__runtime">{data.runtime ? data.runtime : '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
Banner.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    last_air_date: PropTypes.string,
    backdrop_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    tagline: PropTypes.string,
    genres: PropTypes.objectOf(Array),
    runtime: PropTypes.string,
  }).isRequired,
};
export default Banner;
