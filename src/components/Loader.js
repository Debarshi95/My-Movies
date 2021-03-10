import React from "react";
import "./Loader.css";
import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
  return (
    <div className="loader">
      <ClipLoader color="red" />
    </div>
  );
}

export default Loader;
