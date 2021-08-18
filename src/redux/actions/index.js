import { actionTypes } from '../costants';
import axios from 'axios';

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

export const fetchMealRequest = () => {
  return {
    type: actionTypes.FETCH_MEAL_REQUEST,
  }
};

export const fetchMealSuccess = (meal) => {
  return {
    type: actionTypes.FETCH_MEAL_SUCCESS,
    paylod: meal,
  }
};

export const fetchMealFailure = (error) => {
  return {
    type: actionTypes.FETCH_MEAL_FAILURE,
    paylod: error,
  }
};

const fetchMeal = () => {
  return function(dispatch) {
    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    .then(response => {
      
    })
  }
}