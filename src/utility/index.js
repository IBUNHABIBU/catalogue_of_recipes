import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../redux/reducers';
import { middlewares } from '../redux/store';

const renderWithRedux = (component, { initialState, store = createStore(reducers, initialState) } = {}) => ({
  ...render(<Provider store={store}>{component}</Provider>),
});

export default renderWithRedux;