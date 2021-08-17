import allCategoryReducer from '../redux/reducers/allCategoryReducer';
import { actionTypes } from '../redux/costants';

describe('allCategoryReducer', () => {
  it('Should return default state when there is no action', () => {
    const newState = allCategoryReducer(undefined, {});
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
    const newState = allCategoryReducer(undefined, {
     type: actionTypes.SET_RECIPE,
    payload: data });
    expect(newState).toEqual(data);
  });
 
})
