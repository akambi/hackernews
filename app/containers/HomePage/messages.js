/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'hackernews.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Hacker News Stories',
  },
  searchStories: {
    id: `${scope}.search_story.message`,
    defaultMessage: 'Search stories',
  },
});
