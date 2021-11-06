import { get } from 'lodash';
import { createSelector } from 'reselect';

export const selectHome = (state) => state.home;

export const selectPopular = createSelector(selectHome, (subState) => {
  console.log('POPULAR TRIGGERED');
  return get(subState, 'popular');
});

export const selectTrending = createSelector(selectHome, (subState) => get(subState, 'trending'));

export const selectTopRated = createSelector(selectHome, (subState) => get(subState, 'topRated'));

export const selectUpcomingShows = createSelector(selectHome, (subState) =>
  get(subState, 'upcomingShows')
);

export const selectGenreList = createSelector(selectHome, (subState) => {
  console.log('SEKECT GENRES CALLED');
  return get(subState, 'genreList');
});

export const selectUpcomingMovies = createSelector(selectHome, (subState) =>
  get(subState, 'upcomingMovies')
);

export const selectSearch = createSelector(selectHome, (subState) => get(subState, 'search'));
export const selectFilteredSearch = createSelector(selectSearch, (subState) => {
  const { data } = subState;
  const items = data.results.filter(
    (result) => result.media_type === 'movie' || result.media_type === 'tv'
  );
  return items;
});

export const selectData = (name) => createSelector(selectHome, (subState) => get(subState, name));
