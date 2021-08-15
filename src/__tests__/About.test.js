import React from 'react';
import { shallow } from 'enzyme';
import About from './../containers/About';

describe('Testing the About page', () => {
  it('should display the about component with className container', () => {
   const component = shallow(<About />);
   const wrapper = component.find('.container');
   expect(wrapper.length).toBe(1);
  })
});

