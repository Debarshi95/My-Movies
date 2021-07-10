import React from "react";
import { useLocation } from "react-router";
import { TypeContext } from "../providers/TypeProvider";
import InfoCard from "../components/InfoCard";
import "./SearchItem.css";

function SearchItem() {
  const { type } = React.useContext(TypeContext);
  const { state } = useLocation();

  return (
    <div className="searchItem">
      {state?.length === 0 && (
        <p className="searchItem__notFound">
          There are no {`${type === "tv" ? `show` : type}`} that matched your
          query.
        </p>
      )}

      {state?.length > 0 &&
        state?.map((item) => <InfoCard item={item} key={item.id} />)}
    </div>
  );
}

export default SearchItem;
