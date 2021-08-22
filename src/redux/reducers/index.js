import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import allCategoryReducer from './allCategoryReducer';
import selectReducer from './selectReducer';

const reducers = combineReducers({
  allFoods: allCategoryReducer,
  filter: filterReducer,
  selected: selectReducer,
});

export default reducers;
