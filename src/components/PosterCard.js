import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_URL, POSTER_SIZE } from "../config/config";
import { TypeContext } from "../providers/TypeProvider";
import PropTypes from "prop-types";
import "./PosterCard.css";
import LazyImage from "./LazyImage";

function PosterCard({ item }) {
  const { type } = React.useContext(TypeContext);
  const poster = item.profile_path || item.poster_path;

  return (
    <div className="posterCard">
      <Link
        to={`/${type}/${item.id}`}
        className={item.credit_id ? `disable-link` : null}
      >
        <LazyImage
          url={
            poster
              ? `${IMAGE_URL}/${POSTER_SIZE}${poster}`
              : "/assets/no_image.jpg"
          }
          alt={item.title || item.name}
          height="100%"
        />
      </Link>
      {item.credit_id && <p className="posterCard__castName">{item.name}</p>}
    </div>
  );
}

PosterCard.propTypes = {
  item: PropTypes.object,
};
export default PosterCard;
