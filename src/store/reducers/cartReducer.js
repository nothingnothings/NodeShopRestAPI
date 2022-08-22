import { updateObject } from '../../shared/util';
import * as cartActionTypes from '../actions/cartActionTypes';

const initialState = {
  error: false,
  products: [],
  totalPrice: 0,
  loading: false,
};

const fetchCartSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    products: action.cart.products,
    totalPrice: action.cart.totalPrice,
  });
};

const fetchCartFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const removeFromCartStart = (state, _action) => {
  return updateObject(state, {
    loading: true,
  });
};

const removeFromCartSuccess = (state, action) => {
  let updatedProducts = state.products;

  updatedProducts = updatedProducts.filter((product) => {
    return product.productId._id !== action.productId;
  });

  const totalPrice = state.totalPrice;

  const removedProduct = state.products.find((product) => {
    return product.productId._id === action.productId;
  });

  const totalProductPrice = removedProduct.price * removedProduct.quantity;

  return updateObject(state, {
    loading: false,
    products: updatedProducts,
    totalPrice: totalPrice - totalProductPrice,
  });
};

const removeFromCartFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const addProductToCartStart = (state, _action) => {
  return updateObject(state, {
    loading: true,
  });
};

const addProductToCartSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    products: action.products,
  });
};

const addProductToCartFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.FETCH_CART_START:
      return updateObject(state, { loading: true, toCart: false });
    case cartActionTypes.FETCH_CART_SUCCESS:
      return fetchCartSuccess(state, action);
    case cartActionTypes.FETCH_CART_FAIL:
      return fetchCartFail(state, action);
    case cartActionTypes.REMOVE_PRODUCT_FROM_CART_START:
      return removeFromCartStart(state, action);
    case cartActionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS:
      return removeFromCartSuccess(state, action);
    case cartActionTypes.REMOVE_PRODUCT_FROM_CART_FAIL:
      return removeFromCartFail(state, action);
    case cartActionTypes.ADD_PRODUCT_TO_CART_START:
      return addProductToCartStart(state, action);
    case cartActionTypes.ADD_PRODUCT_TO_CART_SUCCESS:
      return addProductToCartSuccess(state, action);
    case cartActionTypes.ADD_PRODUCT_TO_CART_FAIL:
      return addProductToCartFail(state, action);
    default:
      return state;
  }
};

export default cartReducer;
