import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import mealCategoryReducer from './mealCategoryReducer';
import allCategoryReducer from './allCategoryReducer';
import mealDetailsReducer from './mealDetailsReducer';

const reducers = combineReducers({
  allFoods: allCategoryReducer,
  filter: filterReducer,
  categories: mealCategoryReducer,
  details: mealDetailsReducer,
});

export default reducers;
