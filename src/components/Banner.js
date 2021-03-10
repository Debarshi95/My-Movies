import React from "react";
import { BACKDROP_SIZE, IMAGE_URL, POSTER_SIZE } from "../config/config";
import PropTypes from "prop-types";
import "./Banner.css";

function Banner({ data }) {
  let releaseYear = data.release_date || data.last_air_date;
  if (releaseYear !== null) {
    releaseYear = releaseYear.split("-")[0];
  }
  return (
    <div className="banner">
      <img
        src={`${IMAGE_URL}/${BACKDROP_SIZE}/${data.backdrop_path}`}
        alt={`${data.name || data.title}`}
        className="banner__backdrop"
      />
      <div className="banner__posterContainer">
        <img
          src={`${IMAGE_URL}/${POSTER_SIZE}/${data.poster_path}`}
          alt={`${data.name || data.title}`}
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
            <p className="banner__runtime">
              {data.runtime ? data.runtime : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
Banner.propTypes = {
  data: PropTypes.object,
};
export default Banner;
