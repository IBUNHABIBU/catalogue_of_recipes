import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../redux/reducers';
import { thunk } from 'redux-thunk';


export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsError;
};

export const findByTestAtrr = (initialState) => {

}
export const testStore = (initialState) => {
  const createStoreWithMiddleWare = applyMiddleware(...thunk)(createStore);
  return createStoreWithMiddleWare(reducers, initialState);
}
