import checkPropTypes from 'check-prop-types';

const checkProps = (component, expectedProps) => {
  const propError =
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsError;
}

export default checkProps;