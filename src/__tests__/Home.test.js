import React from 'react';
import { shallow } from 'enzyme';
import AllCategoryListing from '../containers/AllCategoryListing';
import Home from '../containers/Home';
import { testStore } from '../utility';
import { Provider } from 'react-redux';

const initialState = {
 allFoods: {
   categories: [
     {
       id: 1,
       name: 'juma',
       title: 'farmer',
     },
   ],
 },
 filter: 'Chicken',
 categories: {
   meals: [
     {
       id: 1,
       name: 'tatu',
     },
   ],
 },
 details: {
   meals: [
     {
       id: 3,
       name: 'Nne',
     },
   ],
 },
};
const store = testStore(initialState);
describe('App', () => {
  it('should render a  component', () => {
    const wrapper = shallow(<Provider store={store}><Home /></Provider>);
    expect(wrapper.find(AllCategoryListing)).toHaveLength(1);
  });

  
});