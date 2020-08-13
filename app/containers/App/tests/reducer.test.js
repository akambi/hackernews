import produce from 'immer';

import appReducer from '../reducer';
import { loadStories, storiesLoaded, repoLoadingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      currentSearchQuery: false,
      userData: {
        stories: false,
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadStories action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.userData.stories = false;
    });

    expect(appReducer(state, loadStories())).toEqual(expectedResult);
  });

  it('should handle the storiesLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My Repo',
      },
    ];
    const searchQuery = 'test';
    const expectedResult = produce(state, draft => {
      draft.userData.stories = fixture;
      draft.loading = false;
      draft.currentSearchQuery = searchQuery;
    });

    expect(appReducer(state, storiesLoaded(fixture, searchQuery))).toEqual(
      expectedResult,
    );
  });

  it('should handle the repoLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, repoLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
