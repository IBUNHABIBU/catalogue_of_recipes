import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { testStore } from '../utility';
import Nav from '../containers/Nav';
import CategoryFilter from '../components/CategoryFilter';

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

describe('Test the Nav', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><Nav /></Provider>);
  });

  it('Test the navbar items', () => {
    // expect(wrapper.find(<CategoryFilter />).length).toBe(1);
  });
});
