import { get } from 'lodash';
import { createSelector } from 'reselect';
import { selectGenreList } from './homeSelector';

export const selectGenreItem = (name) =>
  createSelector([selectGenreList], (list) => {
    const { data } = list;

    /**
     * There can be more than 1 items same name and id after filtering,
     * select only the first item in the array
     */
    const filteredGenre = data?.results.filter((result) => result.name.toLowerCase() === name)[0];
    return filteredGenre;
  });

const selectGenre = (state) => state.genre;

export const selectGenreData = createSelector(selectGenre, (subState) => get(subState, 'data'));
