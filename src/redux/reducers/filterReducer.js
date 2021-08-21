import { actionTypes } from '../costants';

const initialState = 'All';
const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};
export default filterReducer;
