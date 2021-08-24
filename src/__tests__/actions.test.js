import moxios from 'moxios';
import { testStore } from '../utility/index';
import {
  selectCategory, selectMeal, setCategories, changeFilter,
} from '../redux/actions/index';

describe('Fetch all Categories', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('Fetch successfully', () => {
    const expectedResult = {
      categories: [{
        idCategory: '1',
        strCategory: 'Beef',
      },
      ],
    };

    const store = testStore();

    moxios.await(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResult,
      });
    });
  });
});
