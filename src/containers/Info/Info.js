/* eslint-disable react/prop-types */
import React, { memo, useEffect, useCallback } from 'react';
import { compose } from 'redux';
import { injectReducer, injectSaga } from 'redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isEqual } from 'lodash';
import { Creators as CommonCreators } from '../../store/actions/commonActions';
import {
  selectCollection,
  selectItemInfo,
  selectRecommended,
} from '../../store/selectors/infoSelector';
import infoReducer from '../../store/reducers/infoReducer';
import infoSaga from '../../store/sagas/infoSaga';
import Row from '../../components/Row/Row';
import Banner from '../../components/Banner/Banner';
import PosterCard from '../../components/PosterCard/PosterCard';
import './Info.css';

function Info() {
  const dispatch = useDispatch();
  const { data } = useSelector(selectItemInfo);
  const { type: itemType, id: itemId } = useParams();
  const { requestGetItemInfo, requestGetRecommendation, requestGetCollection } = CommonCreators;

  const dispatchGetItemInfo = useCallback(
    (args) => dispatch(requestGetItemInfo(args, itemId)),
    [dispatch, itemId, requestGetItemInfo]
  );

  const dispatchGetRecommendation = useCallback(
    (args) => dispatch(requestGetRecommendation(args, itemId)),
    [dispatch, itemId, requestGetRecommendation]
  );

  const dispatchGetCollection = useCallback(
    () => dispatch(requestGetCollection(data?.belongs_to_collection?.id)),
    [data?.belongs_to_collection?.id, dispatch, requestGetCollection]
  );

  useEffect(() => {
    if (!isEqual(itemId, data?.id?.toString())) {
      dispatchGetItemInfo(itemType, itemId);
    }
  }, [itemId, itemType, dispatch, data?.id, dispatchGetItemInfo]);

  return (
    <div className="info__root">
      <Banner
        bannerPath={data.backdrop_path}
        posterPath={data.poster_path}
        title={data.title || data.name}
        genres={data.genres}
        tagline={data.tagline}
      />
      <div className="info__container">
        <div className="info__overview">
          <h3>Overview</h3>
          <p>{data?.overview}</p>
        </div>

        {data?.seasons && (
          <>
            <h3>Seasons</h3>
            <div className="info__seasons">
              {data.seasons.map((item) => (
                <PosterCard
                  key={item.id}
                  type={itemType}
                  alt={item.name}
                  itemId={item.id}
                  posterPath={item.poster_path}
                />
              ))}
            </div>
          </>
        )}

        {data?.belongs_to_collection && (
          <Row
            title="Collection"
            action={dispatchGetCollection}
            selector={selectCollection}
            type={itemType}
          />
        )}

        <Row
          title="Recommended"
          action={dispatchGetRecommendation}
          selector={selectRecommended}
          type={itemType}
          itemId={itemId}
        />
      </div>
    </div>
  );
}

export default compose(
  memo,
  injectReducer({ key: 'info', reducer: infoReducer }),
  injectSaga({ key: 'info', saga: infoSaga })
)(Info);
