import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import Loader from "../Loader";
import { request } from "../../config/config";
import Row from "../Row";
import Details from "../Details";
import Banner from "../Banner";
import useRequest from "../hooks/useRequest";
import "./ItemInfo.css";
import Page404 from "./Page404";
import withRow from "../hoc/withRow";

function Item() {
  const { id } = useParams();
  const { path } = useRouteMatch();
  const type = path.split("/")[1];

  const { isLoading, apiData, error } = useRequest({
    url: request.getItemData(id, type),
  });
  if (error) return <Page404 error={error.toString()} />;

  if (isLoading) return <Loader />;

  const RowComp = withRow(Row);

  return (
    <div className="itemInfo">
      {apiData.id && (
        <>
          {console.log(apiData)}
          <Banner data={apiData} />
          <div className="itemInfo__wrapper">
            <div className="itemInfo__overview">
              <h2>Overview</h2>
              <p>{apiData.overview}</p>
            </div>
            <Details details={apiData} />
            <RowComp title="Cast" url={request.getCast(type, id)} />
            {type === "movie" && apiData.belongs_to_collection && (
              <RowComp
                url={request.getCollection(apiData.belongs_to_collection.id)}
                title="Collections"
              />
            )}
            {type === "tv" && apiData.seasons && (
              <Row results={apiData.seasons} title="Seasons" />
            )}
            <RowComp
              url={request.getRecommendations(id, type)}
              title="Recommendations"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Item;
