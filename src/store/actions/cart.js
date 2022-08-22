import * as actionTypes from '../actions/cartActionTypes';

import axiosOrder from '../../axios-orders';

export const fetchCartStart = () => {
  return {
    type: actionTypes.FETCH_CART_START,
  };
};

export const fetchCartSuccess = (cart) => {
  return {
    type: actionTypes.FETCH_CART_SUCCESS,
    cart: cart,
  };
};

export const fetchCartFail = (error) => {
  return {
    type: actionTypes.FETCH_CART_FAIL,
    error: error,
  };
};

export const asyncFetchCartStart = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchCartStart());
    axiosOrder
      .get('/cart', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          UserId: `${userId}`,
        },
      })
      .then((res) => {
        dispatch(
          fetchCartSuccess({
            products: res.data.products,
            totalPrice: res.data.totalPrice,
          })
        );
      })
      .catch((error) => {
        dispatch(fetchCartFail(error));
      });
  };
};

export const removeFromCartStart = () => {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART_START,
  };
};

export const removeFromCartSuccess = (productId) => {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS,
    productId: productId,
  };
};

export const removeFromCartFail = (error) => {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART_FAIL,
    error: error,
  };
};

export const asyncRemoveFromCartStart = (token, userId, productId) => {
  return (dispatch) => {
    dispatch(removeFromCartStart());

    axiosOrder
      .delete('/cart', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          UserId: `${userId}`,
        },
        data: {
          productId: productId,
        },
      })
      .then(() => {
        return dispatch(removeFromCartSuccess(productId));
      })
      .then(() => {})
      .catch((err) => {
        return dispatch(removeFromCartFail(err));
      });
  };
};

export const addToCartStart = () => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART_START,
  };
};

export const addToCartSuccess = (products) => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
    products: products,
  };
};

export const addToCartFail = (error) => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART_FAIL,
    error: error,
  };
};

export const asyncAddToCartStart = (token, userId, productId, cb) => {
  return (dispatch) => {
    dispatch(addToCartStart());

    axiosOrder
      .post(
        '/cart',
        {
          productId: productId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            UserId: `${userId}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.cart);
        dispatch(
          addToCartSuccess({
            products: res.data.cart.products,
          })
        );
      })
      .then(() => {})
      .catch((error) => {
        dispatch(addToCartFail(error));
      });
  };
};
