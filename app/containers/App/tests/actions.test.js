import { LOAD_STORIES, LOAD_STORIES_SUCCESS, LOAD_STORIES_ERROR } from '../constants';

import { loadStories, storiesLoaded, repoLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadStories', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_STORIES,
      };

      expect(loadStories()).toEqual(expectedResult);
    });
  });

  describe('storiesLoaded', () => {
    it('should return the correct type and the passed stories', () => {
      const fixture = ['Test'];
      const searchQuery = 'test';
      const expectedResult = {
        type: LOAD_STORIES_SUCCESS,
        stories: fixture,
        searchQuery,
      };

      expect(storiesLoaded(fixture, searchQuery)).toEqual(expectedResult);
    });
  });

  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_STORIES_ERROR,
        error: fixture,
      };

      expect(repoLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
