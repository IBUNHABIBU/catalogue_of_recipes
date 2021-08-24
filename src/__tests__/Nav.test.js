import React from 'react';
import { renderer } from 'react-test-renderer';
import Nav from './../containers/Nav';

describe('Test the Nav', () => {
  it ('renders conrrectly', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
