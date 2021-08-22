import { actionTypes } from '../costants';
// import MealDetails from './../../containers/MealDetails';
// import { mealDetailsReducer } from './mealDetailsReducer';

const initialState = {
  meals: [],
};
const mealDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_MEAL:
      return {
        ...state, ...payload,
      };
    default:
      return state;
  }
};

export default mealDetailsReducer;
// export const mealCategoryReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case actionTypes.SELECT_CATEGORY:
//       return {
//         ...state, ...payload,
//       };
//     default:
//       return state;
//   }
// };
