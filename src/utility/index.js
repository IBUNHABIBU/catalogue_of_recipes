import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import reducers from './../redux/reducers';

const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsError;
};

export default checkProps;
