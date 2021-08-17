import allMealCategoryReducer from '../redux/reducers/allMealCategoryReducer';
import { actionTypes } from '../redux/costants';

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
      description: 'Lorem ipsum',
     }]
    }
    const newState = allMealCategoryReducer(undefined, {
     type: actionTypes.SET_RECIPE,
    payload: data });
    expect(newState).toEqual(data);
  });
 
})
