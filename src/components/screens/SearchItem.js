import React from "react";
import { useHistory, useLocation } from "react-router";
import { TypeContext } from "../../providers/TypeProvider";
import InfoCard from "../InfoCard";
import "./SearchItem.css";

function SearchItem() {
  console.log(useHistory());
  const { type } = React.useContext(TypeContext);
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="searchItem">
      {state.length === 0 && (
        <p className="searchItem__notFound">
          There are no {`${type === "tv" ? `show` : type}`} that matched your
          query.
        </p>
      )}

      {state.length > 0 &&
        state.map((item) => <InfoCard item={item} key={item.id} />)}
    </div>
  );
}

export default SearchItem;
