import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Home from '../containers/Home';
import { testStore } from '../utility';

describe('App', () => {
  it('should render a  component', () => {
    const wrapper = shallow(<Provider store={store}><Home /></Provider>);
    // expect(wrapper.find(AllCategoryListing)).toHaveLength(1);
  });
});
