import { actionTypes } from '../costants';

const initialState = {
  loading: false,
  meals: [],
  errors: '',
};
const mealDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_MEAL_REQUEST:
      return {
        ...state, loading: true,
      };
    case actionTypes.FETCH_MEAL_SUCCESS:
      return {
        loading: true,
        meals: payload,
        error: '',
      };
    case actionTypes.FETCH_MEAL_FAILURE:
      return {
        loading: false,
        meals: [],
        error: payload,
      };
    default:
      return state;
  }
};

export default mealDetailsReducer;
