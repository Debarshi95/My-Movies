import { Types } from '../actions/commonActions';
import makeReducer from './makeReducer';

export default makeReducer({
  request: Types.REQUEST_GET_GENRE_DATA,
  success: Types.SUCCESS_GET_GENRE_DATA,
  failure: Types.FAILURE_GET_GENRE_DATA,
  extraState: { pageCount: 1 },
});
