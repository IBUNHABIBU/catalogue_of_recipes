import React from 'react';
import { renderWithRedux } from './../utility/index';
import { cleanup } from '@testing-library/react';
import Nav from './../containers/Nav';
import { BrowserRouter } from 'react-router-dom';

describe('Test the loading component', () => {
 afterEach(cleanup)
 it('renders the loading spinner', () => {
  const { queryByRole } = renderWithRedux(<BrowserRouter><Nav /></BrowserRouter>)
  expect(queryByRole('Link')).toBeDefined()
 })
})