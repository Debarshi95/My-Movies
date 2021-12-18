import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getCollection, getItemInfo, getRecommendations } from '../../services/tmdbApi';
import { Creators, Types } from '../actions/commonActions';
import fetchEntity from './fetchEntitySaga';

function* fetchItemInfo({ itemId, itemType }) {
  const { successGetItemInfo, failureGetItemInfo } = Creators;
  try {
    const res = yield call(getItemInfo, itemId, itemType);

    if (res.status === 200) {
      const data = yield res.json();
      yield put(successGetItemInfo(data));
    }
  } catch (error) {
    yield put(failureGetItemInfo(error?.message));
  }
}

function* fetchRecommended({ itemId, itemType }) {
  const { successGetRecommendation, failureGetRecommendation } = Creators;
  const request = getRecommendations.bind(null, itemId, itemType);
  yield fetchEntity(request, failureGetRecommendation, successGetRecommendation);
}

function* fetchCollection({ itemId }) {
  const { successGetCollection, failureGetCollection } = Creators;
  try {
    const res = yield call(getCollection, itemId);

    if (res.status === 200) {
      const data = yield res.json();
      const resData = { results: data.parts };
      yield put(successGetCollection(resData));
    }
  } catch (error) {
    yield put(failureGetCollection(error?.message));
  }
}
export default function* infoSaga() {
  yield all([
    takeLatest(Types.REQUEST_GET_ITEM_INFO, fetchItemInfo),
    takeLatest(Types.REQUEST_GET_RECOMMENDATION, fetchRecommended),
    takeLatest(Types.REQUEST_GET_COLLECTION, fetchCollection),
  ]);
}
