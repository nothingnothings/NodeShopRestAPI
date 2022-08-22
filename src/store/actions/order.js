import * as actionTypes from './orderActionTypes';

import axiosOrder from '../../axios-orders';

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const asyncFetchOrdersStart = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    axiosOrder
      .get('/orders', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          UserId: `${userId}`,
        },
      })
      .then((res) => {
        const fetchedOrders = [];
        for (const key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((error) => {
        dispatch(fetchOrdersFail(error));
      });
  };
};
