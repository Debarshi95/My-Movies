import { call, cancel, put, select, takeLatest } from 'redux-saga/effects';
import { Creators, Types } from '../actions/commonActions';
import { selectGenreItem } from '../selectors/genreSelector';
import { getGenreData } from '../../services/tmdbApi';

function* fetchGenre({ pageCount, genre: genreName }) {
  const { failureGetGenreData, successGetGenreData } = Creators;

  const genre = yield select(selectGenreItem(genreName));

  if (!genre) {
    yield put(failureGetGenreData('No data found'));
    yield cancel();
  }
  const { id, type } = genre;
  try {
    const res = yield call(getGenreData, type, id, pageCount);

    if (res.status === 200) {
      const data = yield res.json();
      const resData = { type, ...data };
      yield put(successGetGenreData(resData));
    }
  } catch (error) {
    yield put(failureGetGenreData(error?.message));
  }
}

export default function* genreSaga() {
  yield takeLatest(Types.REQUEST_GET_GENRE_DATA, fetchGenre);
}
