import { actionTypes } from '../costants';

export const setCategories = (meals) => ({
  type: actionTypes.SET_CATEGORIES,
  payload: meals,
});

export const selectRecipe = (meal) => ({
  type: actionTypes.SELECTED_CATEGORY,
  payload: meal,
});

export const changeFilter = (filter) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: filter,
});

export const selectedMeal = (meal) => ({
  type: actionTypes.SELECTED_MEAL,
  payload: meal,
});
