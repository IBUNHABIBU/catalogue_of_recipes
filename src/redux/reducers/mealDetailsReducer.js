import { actionTypes } from '../costants';

const initialState = {
  meals: [],
};
const mealDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_MEAL:
      return {
        ...state, ...payload,
      };
    default:
      return state;
  }
};

export default mealDetailsReducer;
