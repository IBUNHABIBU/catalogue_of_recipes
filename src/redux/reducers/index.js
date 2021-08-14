import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import mealCategoryReducer from './mealCategoryReducer';
import allMealCategoryReducer from './allMealCategoryReducer';
import mealDetailsReducer from './mealDetailsReducer';

const reducers = combineReducers({
  allFoods: allMealCategoryReducer,
  filter: filterReducer,
  categories: mealCategoryReducer,
  details: mealDetailsReducer,
});

export default reducers;
