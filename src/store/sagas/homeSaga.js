import { takeLatest, all } from 'redux-saga/effects';
import fetchEntity from './fetchEntitySaga';
import {
  getGenres,
  getOnTheAirShows,
  getPopular,
  getSearchData,
  getTopRated,
  getTrendingThisWeek,
  getUpcomingMovies,
} from '../../services/tmdbApi';
import { Creators, Types } from '../actions/commonActions';

/**
 *
 * Contains different worker sagas and a watcher saga required in Home Container
 *
 */

function* fetchTopRated({ itemType }) {
  const { failureGetTopRated, successGetTopRated } = Creators;
  const request = getTopRated.bind(null, itemType);
  yield fetchEntity(request, failureGetTopRated, successGetTopRated);
}

function* fetchUpcomingMovies() {
  const { failureGetUpcomingMovies, successGetUpcomingMovies } = Creators;
  yield fetchEntity(getUpcomingMovies, failureGetUpcomingMovies, successGetUpcomingMovies);
}

function* fetchPopular({ itemType }) {
  const { failureGetPopular, successGetPopular } = Creators;
  const request = getPopular.bind(null, itemType);
  yield fetchEntity(request, failureGetPopular, successGetPopular);
}

function* fetchTrending({ itemType }) {
  const { failureGetTrending, successGetTrending } = Creators;
  const request = getTrendingThisWeek.bind(null, itemType);
  yield fetchEntity(request, failureGetTrending, successGetTrending);
}

function* fetchSearchData({ searchTerm }) {
  const { failureGetSearchData, successGetSearchData } = Creators;

  const request = getSearchData.bind(null, searchTerm);
  yield fetchEntity(request, failureGetSearchData, successGetSearchData);
}

function* fetchGenres() {
  const { failureGetGenres, successGetGenres } = Creators;
  yield fetchEntity(getGenres, failureGetGenres, successGetGenres);
}

function* fetchUpcomingShows() {
  const { failureGetUpcomingShows, successGetUpcomingShows } = Creators;
  yield fetchEntity(getOnTheAirShows, failureGetUpcomingShows, successGetUpcomingShows);
}

/**
 *  Watcher Saga for all sagas in Home Container
 */
export default function* homeSaga() {
  const {
    REQUEST_GET_GENRES,
    REQUEST_GET_TOP_RATED,
    REQUEST_GET_POPULAR,
    REQUEST_GET_TRENDING,
    REQUEST_GET_UPCOMING_MOVIES,
    REQUEST_GET_UPCOMING_SHOWS,
    REQUEST_GET_SEARCH_DATA,
  } = Types;

  yield all([
    takeLatest(REQUEST_GET_GENRES, fetchGenres),
    takeLatest(REQUEST_GET_UPCOMING_MOVIES, fetchUpcomingMovies),
    takeLatest(REQUEST_GET_TOP_RATED, fetchTopRated),
    takeLatest(REQUEST_GET_POPULAR, fetchPopular),
    takeLatest(REQUEST_GET_TRENDING, fetchTrending),
    takeLatest(REQUEST_GET_SEARCH_DATA, fetchSearchData),
    takeLatest(REQUEST_GET_UPCOMING_SHOWS, fetchUpcomingShows),
  ]);
}
