import { actionTypes } from '../costants';

export const setRecipe = (meals) => ({
  type: actionTypes.SET_RECIPE,
  payload: meals,
});

export const selectRecipe = (meal) => ({
  type: actionTypes.SELECTED_RECIPE,
  payload: meal,
});

export const changeFilter = (filter) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: filter,
});

export const selectedMeal = (meal) => ({
  type: actionTypes.SELECTED_MEAL,
  payload: meal,
})
