/**
 * StoryListItem
 *
 * Lists the name and the issue count of a story
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ListItem from 'components/ListItem';
import AuthorLink from './AuthorLink';
import StoryLink from './StoryLink';
import Wrapper from './Wrapper';
import './StoryListItem.css';


export function StoryListItem(props) {
  const { item } = props;

  // Put together the content of the story
  const content = (
    <Wrapper>
      <StoryLink href={item.url} target="_blank">
        {item.title}
      </StoryLink>
      <span className="points"> {item.points} points</span>
      <AuthorLink href={`${item.url}`} target="_blank">
        {item.author}
      </AuthorLink>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.author}`} item={content} />;
}

StoryListItem.propTypes = {
  item: PropTypes.object,
};

export default connect(
  createStructuredSelector({
  }),
)(StoryListItem);
