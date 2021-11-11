import { combineReducers } from 'redux';
import makeReducer from './makeReducer';
import { Types } from '../actions/commonActions';

export default combineReducers({
  details: makeReducer({
    request: Types.REQUEST_GET_ITEM_INFO,
    failure: Types.FAILURE_GET_ITEM_INFO,
    success: Types.SUCCESS_GET_ITEM_INFO,
  }),
  collection: makeReducer({
    request: Types.REQUEST_GET_COLLECTION,
    failure: Types.FAILURE_GET_COLLECTION,
    success: Types.SUCCESS_GET_COLLECTION,
  }),
  recommended: makeReducer({
    request: Types.REQUEST_GET_RECOMMENDATION,
    failure: Types.FAILURE_GET_RECOMMENDATION,
    success: Types.SUCCESS_GET_RECOMMENDATION,
  }),
});
