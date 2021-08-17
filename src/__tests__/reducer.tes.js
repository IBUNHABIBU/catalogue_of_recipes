import allMealCategoryReducer from './../redux/reducers/allMealCategoryReducer';
import { actionTypes } from '../redux/costants';
import { selectRecipe } from '../redux/actions';

describe('allMealCategoryReducer', () => {
  it('Should return default state when there is no action', () => {
    const newState = allMealCategoryReducer(undefined, {});
    const defaultState = {
     categories: [],
   };
    expect(newState).toEqual(defaultState);
  })

  it('should return new state when give action', () => {
    const data = {
     categories: [{
      id: 2,
      name: 'Juma',
      description: 'Lorem ipsum'm
     }]
    }
    const newState = allMealCategoryReducer(undefined, {
     type: actionTypes.SELECTED_CATEGORY,
    payload: data })
  });
   expect(newState).toBe(data);
})
