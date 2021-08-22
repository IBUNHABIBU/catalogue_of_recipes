import { React } from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { testStore } from '../utility';
import Nav from '../containers/Nav';

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

// const wrapper =() => shallow(<Provider store={store}><Nav /></Provider>)

describe('Test the Nav', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><Nav /></Provider>);
  });

  it('Test the navbar items', () => {
    expect(wrapper.find('.about').text()).toContain('home');
    console.log(wrapper.find('.about')).debug();
  });
});
