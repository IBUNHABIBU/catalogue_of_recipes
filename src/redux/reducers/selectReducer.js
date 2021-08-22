import actionTypes from '../costants';

const initialState = {
  meals: [],
};
const selectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_ITEM:
      return {
        ...state, ...payload,
      };
    default:
      return state;
  }
};

export default selectReducer;
