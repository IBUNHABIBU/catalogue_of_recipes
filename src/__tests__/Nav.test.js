import React from 'react';
import { renderer } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from '../containers/Nav';
import { testStore } from '../utility';

describe('Test the Nav', () => {
  it('renders conrrectly', () => {
    const store = testStore({});
    const component = <Provider store={store}><Router><Nav /></Router></Provider>
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
