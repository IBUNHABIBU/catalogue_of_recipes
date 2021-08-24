import React from 'react';
import checkProps from '../utility/index';
import { renderer } from 'react-test-renderer';
import CategoryFilter from '../components/CategoryFilter';

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
