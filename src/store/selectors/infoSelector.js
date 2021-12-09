import { get } from 'lodash';
import { createSelector } from 'reselect';

export const selectInfo = (state) => state.info;

export const selectCast = createSelector(selectInfo, (subState) => get(subState, 'cast'));

export const selectRecommended = createSelector(selectInfo, (subState) =>
  get(subState, 'recommended')
);

export const selectCollection = createSelector(selectInfo, (subState) =>
  get(subState, 'collection')
);

export const selectItemInfo = createSelector(selectInfo, (subState) => get(subState, 'details'));
