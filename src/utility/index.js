import { createStore, applyMiddleware } from 'redux';
import reducers from '../redux/reducers';
import { middlewares } from '../redux/store';

const testStore = (initialState) => {
  const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleWare(reducers, initialState);
};

export default testStore;
