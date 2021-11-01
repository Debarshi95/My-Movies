import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { request } from '../../config/config';
import Row from '../../components/Row/Row';
import Details from '../../components/Details/Details';
import Banner from '../../components/Banner/Banner';
import useRequest from '../../hooks/useRequest';
import './Info.css';
import withRow from '../../hoc/withRow';

function Info() {
  const { id } = useParams();
  const { path } = useRouteMatch();
  const type = path?.split('/')[1];

  const { isLoading, apiData } = useRequest({
    url: request.getItemData(id, type),
  });

  if (isLoading) return <Loader />;

  const RowComp = withRow(Row);

  return (
    <div className="itemInfo">
      {apiData && (
        <>
          <Banner data={apiData} />
          <div className="itemInfo__wrapper">
            <div className="itemInfo__overview">
              <h2>Overview</h2>
              <p>{apiData?.overview}</p>
            </div>
            <Details details={apiData} />
            <RowComp title="Cast" url={request.getCast(type, id)} />
            {type === 'movie' && apiData?.belongs_to_collection && (
              <RowComp
                url={request.getCollection(apiData.belongs_to_collection.id)}
                title="Collections"
              />
            )}
            {type === 'tv' && apiData?.seasons && <Row results={apiData.seasons} title="Seasons" />}
            <RowComp url={request.getRecommendations(id, type)} title="Recommendations" />
          </div>
        </>
      )}
    </div>
  );
}

export default Info;
