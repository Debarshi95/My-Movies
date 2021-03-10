import React from "react";
import { makeLanguageFromIso, formatBudget } from "../util/helpers";
import PropTypes from "prop-types";
import "./Details.css";
function Details({ details }) {
  return (
    <div className="details">
      <p>
        <span>Status</span> {details.status}
      </p>
      <p>
        <span>Original Language</span>
        {` ${makeLanguageFromIso(details.original_language).name}`}
      </p>
      <p>
        <span>Budget</span>
        {details.budget > 0 ? ` ${formatBudget(details.budget)}` : " -"}
      </p>
      {details.last_air_date ? (
        <p>
          <span>Last air Date </span>
          {details.last_air_date}
        </p>
      ) : null}
    </div>
  );
}
Details.propTypes = {
  details: PropTypes.object,
};

export default Details;
