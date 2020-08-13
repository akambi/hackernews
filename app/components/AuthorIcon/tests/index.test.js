import React from 'react';
import { render } from 'react-testing-library';

import AuthorIcon from '../index';

describe('<AuthorIcon />', () => {
  it('should render a SVG', () => {
    const { container } = render(<AuthorIcon />);
    expect(container.querySelector('svg')).not.toBeNull();
  });
});
