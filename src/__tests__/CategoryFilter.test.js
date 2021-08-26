import checkPropTypes from 'check-prop-types';
import CategoryFilter from '../components/CategoryFilter';

const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);
describe('Checking Proptypes', () => {
  it('It should not throw a warning', () => {
    const expectedProp = {
      handleFilter: () => {

      },
    };

    const propsError = checkProps(CategoryFilter, expectedProp);
    expect(propsError).toBeUndefined();
  });
});
