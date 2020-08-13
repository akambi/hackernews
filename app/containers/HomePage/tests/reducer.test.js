import produce from 'immer';

import homeReducer from '../reducer';
import { changeSearchQuery } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      searchQuery: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeSearchQuery action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = produce(state, draft => {
      draft.searchQuery = fixture;
    });

    expect(homeReducer(state, changeSearchQuery(fixture))).toEqual(expectedResult);
  });
});
