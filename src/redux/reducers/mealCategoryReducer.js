import { actionTypes } from '../costants';

const initialState = {
  // category: [],
};
const mealCategoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_RECIPE:
      return {
        ...state, ...payload,
      };
    default:
      return state;
  }
};

export default mealCategoryReducer;