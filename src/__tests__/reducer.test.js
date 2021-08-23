import allCategoryReducer from '../redux/reducers/allCategoryReducer';
import { actionTypes } from '../redux/costants';
import filterReducer from '../redux/reducers/filterReducer';
import selectReducer from '../redux/reducers/selectReducer';

describe('Reducers', () => {
  describe('allCategoryReducer', () => {
    it('Should return default state when there is no action', () => {
      const newState = allCategoryReducer(undefined, {});
      const defaultState = {
        categories: [],
      };
      expect(newState).toEqual(defaultState);
    });

    it('should return new state when give action', () => {
      const data = {
        categories: [{
          id: 2,
          name: 'Juma',
          description: 'Lorem ipsum',
        }],
      };
      const newState = allCategoryReducer(undefined, {
        type: actionTypes.SET_RECIPE,
        payload: data,
      });
      expect(newState).toEqual(data);
    });
  });

  describe('filterReducer', () => {
    it('should return default state when no action', () => {
      const defaultState = 'Beef';
      const newState = filterReducer(undefined, {});
      expect(newState).toBe('Beef');
    });

    it('should return new state when given the action', () => {
      const newState = filterReducer(undefined, {
        type: actionTypes.CHANGE_FILTER,
        payload: 'beef',
      });
      expect(newState).toBe('beef');
    });
  });

  describe('selectedCategory', () => {
    it('It should return default state when no action', () => {
      const defaultState = {
        meals: [],
      };

      const newState = selectReducer(undefined, {});
      expect(newState).toEqual({
        meals: [],
      });
    });

    it('should return new state when apply action', () => {
      const data = {
        meals: [
          {
            id: 1,
            name: 'Januari',
            description: 'Lorem ipsum',
          },
        ],
      };
      const newState = selectReducer(undefined, {
        type: actionTypes.SELECTED_ITEM,
        payload: data,
      });

      expect(newState).toEqual(data);
    });
  });
});
