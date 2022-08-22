import * as orderActionTypes from '../actions/orderActionTypes';

import { updateObject } from '../../shared/util';

const initialState = {
  orders: [],
  loading: false,
  error: false,
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, { orders: action.orders, loading: false });
};

const fetchProductsFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.error });
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderActionTypes.FETCH_ORDERS_START:
      return updateObject(state, { loading: true });
    case orderActionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case orderActionTypes.FETCH_ORDERS_FAIL:
      return fetchProductsFail(state, action);
    default:
      return state;
  }
};

export default orderReducer;
