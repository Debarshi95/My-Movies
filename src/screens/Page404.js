import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Page404.css";

function Page404() {
  return (
    <div className="pageNotFound">
      <h2>Oops! We can&apos;t find the page you&apos;re looking for</h2>
      <Link to="/">Home</Link>
    </div>
  );
}
Page404.propTypes = {
  error: PropTypes.object,
};
export default Page404;
