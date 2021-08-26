import React from 'react';
import { cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderWithRedux from '../utility/index';
import Nav from '../containers/Nav';

describe('Test the loading component', () => {
  afterEach(cleanup);
  it('renders the loading spinner', () => {
    const { queryByRole } = renderWithRedux(<BrowserRouter><Nav /></BrowserRouter>);
    expect(queryByRole('Link')).toBeDefined();
  });
});
