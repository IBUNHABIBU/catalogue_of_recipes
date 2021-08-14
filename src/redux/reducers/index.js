import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import mealCategoryReducer from './mealCategoryReducer';
import mealReducer from './mealReducer';

const reducers = combineReducers({
  allFoods: mealReducer,
  filter: filterReducer,
  categories: mealCategoryReducer,
});

export default reducers;
