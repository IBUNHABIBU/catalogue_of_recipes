import allMealCategoryReducer from './../redux/reducers/allMealCategoryReducer';
import { actionTypes } from '../redux/costants';

describe('allMealCategoryReducer', () => {
  it('Should return default state when there is no action', () => {
    const newState = allMealCategoryReducer(undefined, {});
    const defaultState = {
     categories: [],
   };
    expect(newState).toEqual(defaultState);
  })
})
