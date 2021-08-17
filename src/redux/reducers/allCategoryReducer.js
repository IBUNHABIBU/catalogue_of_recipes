import { actionTypes } from '../costants';

const initialState = {
  categories: [],
};
const allCategoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CATEGORIES:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default allCategoryReducer;
