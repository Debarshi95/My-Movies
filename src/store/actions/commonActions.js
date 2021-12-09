/* eslint-disable import/prefer-default-export */
import { createActions } from 'reduxsauce';

// Common actions for both Movies and Tv Series based on "itemType" payload value

export const { Types, Creators } = createActions({
  requestGetTrending: ['itemType'],
  successGetTrending: ['data'],
  failureGetTrending: ['error'],

  requestGetTopRated: ['itemType'],
  successGetTopRated: ['data'],
  failureGetTopRated: ['error'],

  requestGetGenres: null,
  successGetGenres: ['data'],
  failureGetGenres: ['error'],

  requestGetPopular: ['itemType'],
  successGetPopular: ['data'],
  failureGetPopular: ['error'],

  requestGetUpcomingShows: null,
  successGetUpcomingShows: ['data'],
  failureGetUpcomingShows: ['error'],

  requestGetUpcomingMovies: null,
  successGetUpcomingMovies: ['data'],
  failureGetUpcomingMovies: ['error'],

  requestGetSearchData: ['searchTerm'],
  successGetSearchData: ['data'],
  failureGetSearchData: ['error'],

  requestGetGenreData: ['pageCount', 'genre'],
  successGetGenreData: ['data'],
  failureGetGenreData: ['error'],

  requestGetCast: ['itemType', 'itemId'],
  successGetCast: ['data'],
  failureGetCast: ['error'],

  requestGetRecommendation: ['itemType', 'itemId'],
  successGetRecommendation: ['data'],
  failureGetRecommendation: ['error'],

  requestGetItemInfo: ['itemType', 'itemId'],
  successGetItemInfo: ['data'],
  failureGetItemInfo: ['error'],

  requestGetCollection: ['itemId'],
  successGetCollection: ['data'],
  failureGetCollection: ['error'],
});
