import { CHANGE_SEARCHQUERY } from '../constants';

import { changeSearchQuery } from '../actions';

describe('Home Actions', () => {
  describe('changeSearchQuery', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_SEARCHQUERY,
        searchQuery: fixture,
      };

      expect(changeSearchQuery(fixture)).toEqual(expectedResult);
    });
  });
});
