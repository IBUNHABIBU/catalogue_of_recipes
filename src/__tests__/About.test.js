import React from 'react';
import { shallow } from 'enzyme';
import About from '../containers/About';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

// const setup = (props={}) => {
//   const { getByText } = render(<About />);
//   return component;
// }

describe('Testing the About page', () => {
  // let component;
  // beforeEach(() => {
  //   component = setup();
  // })
  it('should display the about component with className container', () => {
    const { getByText } = render(<About />);
    const wrapper = getByText('Learn different food recipes via this website');
    expect(wrapper).toBeInTheDocument();
  });
});
