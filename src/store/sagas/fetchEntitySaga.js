import { call, put } from 'redux-saga/effects';

export default function* fetchEntity(request, failure, success, ...args) {
  try {
    const response = yield call(request);
    if (response.data) {
      yield put(success(response.data));
    }
  } catch (error) {
    const err = error?.message || 'Some';
    yield put(failure(err, ...args));
  }
}
