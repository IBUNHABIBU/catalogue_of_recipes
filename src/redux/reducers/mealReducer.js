import { actionTypes } from '../costants';

const initialState = {};
const mealReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_RECIPE:
      return { ...state, categiries: payload };
    case actionTypes.SELECTED_RECIPE:
      return {
        ...state, ...payload,
      };
    default:
      return state;
  }
};

export default mealReducer;
