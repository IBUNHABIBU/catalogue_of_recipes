import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../redux/reducers';

const renderWithRedux = (component,
  { initialState, store = createStore(reducers, initialState) } = {}) => ({
  ...render(<Provider store={store}>{component}</Provider>),
});

export default renderWithRedux;
