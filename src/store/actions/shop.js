import * as shopActionTypes from '../actions/shopActionTypes';

import axiosOrder from '../../axios-orders';

export const fetchProductsStart = () => {
  return {
    type: shopActionTypes.FETCH_PRODUCTS_START,
  };
};

export const fetchProductsSuccess = (products, pageNumber) => {
  return {
    type: shopActionTypes.FETCH_PRODUCTS_SUCCESS,
    products,
    pageNumber: pageNumber,
  };
};

export const fetchProductsFail = (error) => {
  return {
    type: shopActionTypes.FETCH_PRODUCTS_FAIL,
    error: error,
  };
};

export const asyncFetchProductsStart = (pageNumber, direction) => {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    let page = pageNumber || 1;

    if (direction === 'next') {
      page++;
    }

    if (direction === 'previous') {
      page--;
    }

    axiosOrder({
      method: 'GET',
      url: `/shop/?page=${page}`,
    })
      .then((res) => {
        const fetchedProducts = [];
        for (const key in res.data) {
          fetchedProducts.push({
            ...res.data[key],
            id: key,
            value: res.data[key],
          });
        }
        dispatch(fetchProductsSuccess(fetchedProducts, page));
      })
      .catch((error) => {
        dispatch(fetchProductsFail(error));
      });
  };
};
