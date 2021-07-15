import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_URL, POSTER_SIZE } from "../config/config";
import { TypeContext } from "../providers/TypeProvider";
import PropTypes from "prop-types";
import "./InfoCard.css";
import LazyImage from "./LazyImage";
function InfoCard({ item }) {
  const { type } = React.useContext(TypeContext);

  return (
    <div className="infoCard">
      <Link to={`/${type}/${item.id}`}>
        <LazyImage
          url={
            item.poster_path
              ? `${IMAGE_URL}/${POSTER_SIZE}/${item.poster_path}`
              : "/assets/no_image.jpg"
          }
          alt={item.title || item.name}
          height="100%"
        />
        <p>{item.name || item.title}</p>
      </Link>
    </div>
  );
}
InfoCard.propTypes = {
  item: PropTypes.object,
};
export default InfoCard;
