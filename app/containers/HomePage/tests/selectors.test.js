import { selectHome, makeSelectSearchQuery } from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      userData: {},
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectSearchQuery', () => {
  const searchQuerySelector = makeSelectSearchQuery();
  it('should select the searchQuery', () => {
    const searchQuery = 'mxstbr';
    const mockedState = {
      home: {
        searchQuery,
      },
    };
    expect(searchQuerySelector(mockedState)).toEqual(searchQuery);
  });
});
