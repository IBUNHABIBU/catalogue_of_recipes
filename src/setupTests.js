import '@testing-library/jest-dom';
import Enzemy from 'enzyme';
import EnzymeAdapter from 'enzyme-adaptor-react-16';

Enzyme.configure({
 adapter: new EnzymeAdapter(),
 disableLifecycleMethods: true
})