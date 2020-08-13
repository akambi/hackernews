/**
 * Gets the stories from HackerNews
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_STORIES } from 'containers/App/constants';
import { storiesLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectSearchQuery } from 'containers/HomePage/selectors';

/**
 * HackerNews stories request/response handler
 */
export function* getStories() {
  // Select searchQuery from store
  const searchQuery = yield select(makeSelectSearchQuery());
  let requestURL = `https://hn.algolia.com/api/v1/search_by_date?tags=story`;
  if (searchQuery && searchQuery.length) {
    requestURL = `https://hn.algolia.com/api/v1/search_by_date?query=${searchQuery}&tags=story`;
  }

  try {
    // Call our request helper (see 'utils/request')
    const stories = yield call(request, requestURL);
    const { hits } = stories;
    yield put(storiesLoaded(hits, searchQuery));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* hackerNewsData() {
  // Watches for LOAD_STORIES actions and calls getStories when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_STORIES, getStories);
}
