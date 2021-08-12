import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import mealReducer from './mealReducer';

const reducers = combineReducers({
  allFoods: mealReducer,
  filter: filterReducer
});

export default reducers;
