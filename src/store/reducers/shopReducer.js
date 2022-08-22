import * as shopActionTypes from '../actions/shopActionTypes';

import { updateObject } from '../../shared/util';

const initialState = {
  products: [],
  currentPage: 1,
  loading: false,
  error: false,
  lastPage: 3,
};

const fetchProductsSuccess = (state, action) => {
  return updateObject(state, {
    products: action.products,
    loading: false,
    currentPage: action.pageNumber,
  });
};

const fetchProductsFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_PRODUCTS_START:
      return updateObject(state, { loading: true });
    case shopActionTypes.FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccess(state, action);
    case shopActionTypes.FETCH_PRODUCTS_FAIL:
      return fetchProductsFail(state, action);
    default:
      return state;
  }
};

export default orderReducer;
