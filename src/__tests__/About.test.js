import React from 'react';
import { shallow } from 'enzyme';
import About from '../containers/About';
import { Provider } from 'react-redux'

const setup = (props={}) => {
  const component = shallow(<About {...props} />);
  return component;
}

describe('Testing the About page', () => {
  let component;
  beforeEach(() => {
    component = setup();
  })
  it('should display the about component with className container', () => {
    const wrapper = component.find('.container');
    expect(wrapper.length).toBe(1);
  });
});
