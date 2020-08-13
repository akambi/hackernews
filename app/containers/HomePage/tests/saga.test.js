/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_STORIES } from 'containers/App/constants';
import { storiesLoaded, repoLoadingError } from 'containers/App/actions';

import hackerNewsData, { getStories } from '../saga';

const searchQuery = 'test';

/* eslint-disable redux-saga/yield-effects */
describe('getStories Saga', () => {
  let getStoriesGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getStoriesGenerator = getStories();

    const selectDescriptor = getStoriesGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getStoriesGenerator.next(searchQuery).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the storiesLoaded action if it requests the data successfully', () => {
    const response = [
      {
        name: 'First repo',
      },
      {
        name: 'Second repo',
      },
    ];
    const putDescriptor = getStoriesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(storiesLoaded(response, searchQuery)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getStoriesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(repoLoadingError(response)));
  });
});

describe('hackerNewsDataSaga Saga', () => {
  const hackerNewsDataSaga = hackerNewsData();

  it('should start task to watch for LOAD_STORIES action', () => {
    const takeLatestDescriptor = hackerNewsDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_STORIES, getStories));
  });
});
