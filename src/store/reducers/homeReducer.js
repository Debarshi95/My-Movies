import { combineReducers } from 'redux';
import { Types } from '../actions/commonActions';
import makeReducer from './makeReducer';

export default combineReducers({
  trending: makeReducer({
    request: Types.REQUEST_GET_TRENDING,
    success: Types.SUCCESS_GET_TRENDING,
    failure: Types.FAILURE_GET_TRENDING,
  }),
  topRated: makeReducer({
    request: Types.REQUEST_GET_TOP_RATED,
    success: Types.SUCCESS_GET_TOP_RATED,
    failure: Types.FAILURE_GET_TOP_RATED,
  }),
  popular: makeReducer({
    request: Types.REQUEST_GET_POPULAR,
    success: Types.SUCCESS_GET_POPULAR,
    failure: Types.FAILURE_GET_POPULAR,
  }),
  upcomingMovies: makeReducer({
    request: Types.REQUEST_GET_UPCOMING_MOVIES,
    success: Types.SUCCESS_GET_UPCOMING_MOVIES,
    failure: Types.FAILURE_GET_UPCOMING_MOVIES,
  }),
  genreList: makeReducer({
    request: Types.REQUEST_GET_GENRES,
    success: Types.SUCCESS_GET_GENRES,
    failure: Types.FAILURE_GET_GENRES,
  }),
  upcomingShows: makeReducer({
    request: Types.REQUEST_GET_UPCOMING_SHOWS,
    success: Types.SUCCESS_GET_UPCOMING_SHOWS,
    failure: Types.FAILURE_GET_UPCOMING_SHOWS,
  }),
  search: makeReducer({
    request: Types.REQUEST_GET_SEARCH_DATA,
    success: Types.SUCCESS_GET_SEARCH_DATA,
    failure: Types.FAILURE_GET_SEARCH_DATA,
    extraState: { searchTerm: '' },
  }),
});
