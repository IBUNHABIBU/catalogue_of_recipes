import React from 'react';
import { cleanup } from '@testing-library/react';
import renderWithRedux from '../utility/index';
import Loading from '../containers/Loading';

describe('Test the loading component', () => {
  afterEach(cleanup);
  it('renders the loading spinner', () => {
    const { queryByTestId } = renderWithRedux(<Loading />);
    expect(queryByTestId('loading')).toBeDefined();
  });
});
