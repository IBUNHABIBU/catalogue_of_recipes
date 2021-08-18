import axios from 'axios';
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

export const fetchMealRequest = () => ({
  type: actionTypes.FETCH_MEAL_REQUEST,
});

export const fetchMealSuccess = (meal) => ({
  type: actionTypes.FETCH_MEAL_SUCCESS,
  paylod: meal,
});

export const fetchMealFailure = (error) => ({
  type: actionTypes.FETCH_MEAL_FAILURE,
  paylod: error,
});

export const fetchMeal = () => (dispatch) => {
  dispatch(fetchMealRequest());
  axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    .then((response) => {
      dispatch(fetchMealSuccess(response.data));
    }).catch((error) => {
      dispatch(fetchMealFailure(error.message));
    });
};
