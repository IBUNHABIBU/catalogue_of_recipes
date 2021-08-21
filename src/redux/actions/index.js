import axios from 'axios';
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

export const fetchByCategory = (categoryName) => async (dispatch) => {
  console.log('hwlo');
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
  dispatch(selectCategory(response.data));
};
