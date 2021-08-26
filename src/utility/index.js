import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../redux/reducers';
import { middlewares } from '../redux/store';
import { Provider } from 'react-redux';

// const testStore = (initialState) => {
//   const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
//   return createStoreWithMiddleWare(reducers, initialState);
// };

export const renderWithRedux = (component, { initialState, store= createStore( reducers, initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}
// export default testStore;
