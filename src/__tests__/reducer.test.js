import allCategoryReducer from '../redux/reducers/allCategoryReducer';
import filterReducer from '../redux/reducers/filterReducer';
import selectReducer from '../redux/reducers/selectReducer';
import actionTypes from '../redux/costants/index';

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
          idMeal: '1',
          strMeal: 'Januari',
          strCategory: 'Lorem ipsum',
        }],
      };
      const newState = allCategoryReducer(undefined, {
        type: actionTypes.SET_CATEGORIES,
        payload: data,
      });
      expect(newState).toEqual(data);
    });
  });

  describe('filterReducer', () => {
    it('should return default state when no action', () => {
      const defaultState = 'All';
      const newState = filterReducer(undefined, {});
      expect(newState).toBe(defaultState);
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
      expect(newState).toEqual(defaultState);
    });

    it('should return new state when apply action', () => {
      const data = {
        meals: [
          {
            idMeal: 1,
            strMeal: 'Januari',
            strCategory: 'Lorem ipsum',
          },
        ],
      };
      const newState = selectReducer(undefined, {
        type: actionTypes.SELECT_ITEM,
        payload: data,
      });

      expect(newState).toEqual(data);
    });
  });
});
