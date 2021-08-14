import { actionTypes } from '../costants';

const initialState = {
  meals: [],
};
const mealCategoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_CATEGORY:
      return {
        ...state, ...payload,
      };
    default:
      return state;
  }
};

export default mealCategoryReducer;
