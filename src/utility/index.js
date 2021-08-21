import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../redux/reducers';
import { middlewares } from '../redux/store';

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsError;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleWare(reducers, initialState);
};
