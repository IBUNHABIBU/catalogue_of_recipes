import { combineReducers } from 'redux';
import mealReducer from './mealReducer';

const reducers = combineReducers({
  allFoods: mealReducer,
});

export default reducers;
