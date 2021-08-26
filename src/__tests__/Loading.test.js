import React from 'react';
import { renderWithRedux } from './../utility/index';
import { cleanup } from '@testing-library/react';
import Loading from './../containers/Loading';


describe('Test the loading component', () => {
 afterEach(cleanup)
 it('renders the loading spinner', () => {
  const { queryByTestId } = renderWithRedux(<Loading />)
  expect(queryByTestId('loading')).toBeDefined()
 })
})