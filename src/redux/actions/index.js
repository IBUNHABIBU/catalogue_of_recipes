import { actionTypes } from '../costants';

export const setRecipe = (meals) => ({
  type: actionTypes.SET_RECIPE,
  payload: meals,
});

export const selectedRecipe = (meal) => ({
  type: actionTypes.SELECTED_RECIPE,
  payload: meal,
});

export const changeFilter = (filter) => {
  type: actionTypes.changeFilter,
  filter 
}