/* globals describe, expect, it, beforeEach */
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Nav from './../containers/Nav';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Provider><Nav /></Provider>);
});

describe('Menu navigation', () => {
  it('display the logo', () => {
    expect(wrapper.find('.navbar-brand').text()).toContain('RECIPES ZONE');
  });

  it('display the menu', () => {
   expect(wrapper.find('.nav-link.active')).to.have.lengthOf(1);
 });
});

describe('snapshots', () => {
  it('renders App component correctly', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});