import { actionTypes } from '../costants';

export const setProduct = (products) => ({
  type: actionTypes.SET_PRODUCT,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: actionTypes.SELECTED_PRODUCT,
  payload: product,
});
