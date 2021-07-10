import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_URL, POSTER_SIZE } from "../config/config";
import { TypeContext } from "../providers/TypeProvider";
import PropTypes from "prop-types";
import "./InfoCard.css";

function InfoCard({ item }) {
  const { type } = React.useContext(TypeContext);

  return (
    <div className="infoCard">
      <Link to={`/${type}/${item.id}`}>
        <img
          src={
            item.poster_path
              ? `${IMAGE_URL}/${POSTER_SIZE}/${item.poster_path}`
              : "/assets/no_image.jpg"
          }
          alt={item.name || item.title}
          loading="lazy"
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
