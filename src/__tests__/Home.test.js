import React from 'react';
import Home from '../containers/Home';
import { renderer } from 'react-test-renderer';

describe('App', () => {
  it('should render a  component', () => {
     const tree = renderer.create(<Home />).toJSON();
     expect(tree).toMatchSnapshot();
  });
});
