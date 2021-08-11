import { actionTypes } from '../costants';

const initialState = []
export const mealReducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_RECIPE:
      return [...state, ...payload];
    case actionTypes.SELECTED_RECIPE:
      return [...state, ...payload];
    default:
      return state;
  }
};
