/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectSearchQuery = () =>
  createSelector(
    selectHome,
    homeState => homeState.searchQuery,
  );

export { selectHome, makeSelectSearchQuery };
