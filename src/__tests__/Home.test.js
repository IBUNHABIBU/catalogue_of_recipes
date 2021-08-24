import React from 'react';
import { renderer } from 'react-test-renderer';
import Home from '../containers/Home';

describe('App', () => {
  it('should render a  component', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
