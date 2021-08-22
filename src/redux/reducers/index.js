import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import allCategoryReducer from './allCategoryReducer';
import mealDetailsReducer from './mealDetailsReducer';

const reducers = combineReducers({
  allFoods: allCategoryReducer,
  filter: filterReducer,
  selected: mealDetailsReducer,
});

export default reducers;
