import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import About from '../containers/About';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<About />);
});

describe('<About />', () => {
  it('Display the paragraph', () => {
    const result = 'Learn different food recipes via this websiteAll data in these website come from The MealDb api';
    expect(wrapper.find('.about').text()).toContain(result);
  });
});

describe('snapshots', () => {
  it('renders App component correctly', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
