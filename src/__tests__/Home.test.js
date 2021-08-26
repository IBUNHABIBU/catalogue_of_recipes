import React from 'react';
import { renderer } from 'react-test-renderer';
import Home from '../containers/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { cleanup, fireEvent, render } from '@testing-library/react';
import 'jest-dom/extend-expect';

describe('App', () => {
  it('should render a  component', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
