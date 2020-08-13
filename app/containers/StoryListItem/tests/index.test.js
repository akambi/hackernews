/**
 * Test the repo list item
 */

import React from 'react';
import { getByText, render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import { StoryListItem } from '../index';

const renderComponent = (props = {}) =>
  render(
    <IntlProvider locale="en">
      <StoryListItem {...props} />
    </IntlProvider>,
  );

describe('<StoryListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      owner: {
        login: 'mxstbr',
      },
      html_url: 'https://github.com/react-boilerplate/react-boilerplate',
      name: 'react-boilerplate',
      open_issues_count: 20,
      full_name: 'react-boilerplate/react-boilerplate',
    };
  });

  it('should render a ListItem', () => {
    const { container } = renderComponent({ item });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render the current searchQuery', () => {
    const { queryByText } = renderComponent({
      item,
      currentSearchQuery: item.owner.login,
    });
    expect(queryByText(item.owner.login)).toBeNull();
  });

  it('should render searchQuerys that are not the current one', () => {
    const { container } = renderComponent({
      item,
      currentSearchQuery: 'nikgraf',
    });
    expect(
      getByText(container, content => content.startsWith(item.owner.login)),
    ).not.toBeNull();
  });

  it('should render the repo name', () => {
    const { container } = renderComponent({ item });
    expect(
      getByText(container, content => content.endsWith(item.name)),
    ).not.toBeNull();
  });

  it('should render the issue count', () => {
    const { container } = renderComponent({ item });
    expect(
      getByText(container, item.open_issues_count.toString(10)),
    ).not.toBeNull();
  });

  it('should render the AuthorIcon', () => {
    const { container } = renderComponent({ item });
    expect(container.querySelector('svg')).not.toBeNull();
  });
});
