import { actionTypes } from '../costants';

export const setCategories = (meals) => ({
  type: actionTypes.SET_CATEGORIES,
  payload: meals,
});

export const selectCategory = (meal) => ({
  type: actionTypes.SELECT_CATEGORY,
  payload: meal,
});

export const changeFilter = (filter) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: filter,
});

export const selectMeal = (meal) => ({
  type: actionTypes.SELECT_MEAL,
  payload: meal,
});
