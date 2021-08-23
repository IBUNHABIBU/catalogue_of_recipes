import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import AllCategoryListing from '../containers/AllCategoryListing';
import Home from '../containers/Home';
import { testStore } from '../utility';

const initialState = {
  categories: [
    {
      id: 1,
      name: 'juma',
      title: 'farmer',
    },
  ],
  filter: 'Chicken',
  meals: [
    {
      id: 1,
      name: 'tatu',
    },
  ],
  meals: [
    {
      id: 3,
      name: 'Nne',
    },
  ],
};
const store = testStore(initialState);
describe('App', () => {
  it('should render a  component', () => {
    const wrapper = shallow(<Provider store={store}><Home /></Provider>);
    // expect(wrapper.find(AllCategoryListing)).toHaveLength(1);
  });
});
