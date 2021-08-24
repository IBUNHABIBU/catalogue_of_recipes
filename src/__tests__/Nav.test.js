import React from 'react';
import { renderer } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Nav from '../containers/Nav';
import { testStore } from '../utility';

describe('Test the Nav', () => {
  it('renders conrrectly', () => {
    const store = testStore({});
    const component = <Provider store={store}><Router><Nav /></Router></Provider>;
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Check for the css class', () => {
    const expectedResult = {
      idCategory: '1',
      strCategory: 'Beef',
    };

    const store = testStore(expectedResult);
    const comp = shallow(<Provider store={store}><Nav /></Provider>);
    expect(comp.find('.home')).toEqual(1);
  });
});
