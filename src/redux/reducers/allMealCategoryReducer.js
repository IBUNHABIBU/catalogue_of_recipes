import { actionTypes } from '../costants';

const initialState = {
  categories: [],
};
const allMealCategoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_RECIPE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default allMealCategoryReducer;
