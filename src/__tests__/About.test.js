import { render } from 'enzyme';

import About from '../containers/About';

let wrapper;

afterEach(() => {
  wrapper = render(<About />);
});

describe('<About />', () => {
  it('should display the text', () => {
    expect(wrapper).toContain('This');
  });
});
