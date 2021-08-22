import axios from 'axios';
import { setCategories, selectItem } from './index';

export const fetchAllCategories = () => async (dispatch) => {
  const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
  dispatch(setCategories(response.data));
};

export const fetchByCategory = (categoryName) => async (dispatch) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
  dispatch(selectItem(response.data));
};

export const featchMealDetails = (mealId) => async (dispatch) => {
  const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  dispatch(selectItem(response.data));
};
