import { call, put } from 'redux-saga/effects';

export default function* fetchEntity(request, failure, success, ...args) {
  try {
    const response = yield call(request);
    if (response.status === 200) {
      const data = yield response.json();
      yield put(success(data));
    }
  } catch (error) {
    const err = error?.message || 'Some';
    yield put(failure(err, ...args));
  }
}
