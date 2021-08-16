import React from 'react';
import { shallow } from 'enzyme';
import About from '../containers/About';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

const setup = (props={}) => {
  const comp = <Provider>
    <About {...props} />
  </Provider>
  const component = shallow(comp);
  return component;
}

describe('Testing the About page', () => {
  let component;
  beforeEach(() => {
    component = setup();
  })
  it('should display the about component with className container', () => {
    const wrapper = component.find('.container');
    console.log(component.debug());
  });
});
