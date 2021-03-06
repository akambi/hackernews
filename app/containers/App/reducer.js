/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_STORIES_SUCCESS, LOAD_STORIES, LOAD_STORIES_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentSearchQuery: false,
  userData: {
    stories: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STORIES:
        draft.loading = true;
        draft.error = false;
        draft.userData.stories = false;
        break;

      case LOAD_STORIES_SUCCESS:
        draft.userData.stories = action.stories;
        draft.loading = false;
        draft.currentSearchQuery = action.searchQuery;
        break;

      case LOAD_STORIES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
