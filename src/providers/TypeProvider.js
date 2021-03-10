import React from "react";
import PropTypes from "prop-types";

export const TypeContext = React.createContext();

function TypeProvider({ children }) {
  const [type, setType] = React.useState("movie");
  const value = { type, setType };
  React.useEffect(() => {
    if (localStorage.type) {
      setType(localStorage.getItem("type"));
    }
  }, []);
  return <TypeContext.Provider value={value}>{children}</TypeContext.Provider>;
}

TypeProvider.propTypes = { children: PropTypes.element };
export default TypeProvider;
