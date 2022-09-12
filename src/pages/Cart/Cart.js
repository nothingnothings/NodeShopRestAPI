import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as cartActionTypes from '../../store/actions/cart';

import Cart from '../../components/Cart/Cart';
import CartItem from '../../components/Cart/CartItemList/CartItem/CartItem';
import CartItemList from '../../components/Cart/CartItemList/CartItemList';
import NoProduct from '../../components/Cart/NoProduct/NoProduct';
import Spinner from '../../components/UI/Spinner/Spinner';
import Wrapper from '../../components/Wrapper/Wrapper';

import './Cart.css';

const CartPage = (props) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    setCurrentUser(props.token);
    if (currentUser) {
      props.onFetchCart(props.token, props.userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const onRemoveProduct = (product) => {
    const productId = product._id;

    props.onRemoveItem(props.token, props.userId, productId);
  };

  let cart = <Spinner></Spinner>;

  if (!props.loading && props.cart.products.length === 0) {
    cart = (
      <Wrapper>
        <CartItemList>
          <NoProduct>
            <li className="no-product cart-item">
              <h2 style={{ color: 'var(--light-dark)' }}>
                There are no products in your Cart.
              </h2>
              <h2>There are no products in your Cart.</h2>
              <h2 style={{ color: 'var(--light-dark)' }}>
                There are no products in your Cart.
              </h2>
            </li>
          </NoProduct>
        </CartItemList>
      </Wrapper>
    );
  }

  if (!props.loading && props.cart.products.length >= 1) {
    cart = (
      <React.Fragment>
        <CartItemList>
          {props.cart.products.map((product) => {
            return (
              <CartItem
                key={product.productId._id}
                productId={product.productId}
                quantity={product.quantity}
                onDelete={onRemoveProduct}
              ></CartItem>
            );
          })}
        </CartItemList>
        <NavLink to="/checkout" className="cart-btn">
          Order Now!
        </NavLink>
      </React.Fragment>
    );
  }

  return <Cart>{cart}</Cart>;
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    loading: state.cart.loading,
    totalPrice: state.cart.totalPrice,
    error: state.cart.error,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCart: (token, userId) => {
      dispatch(cartActionTypes.asyncFetchCartStart(token, userId));
    },
    onRemoveItem: (token, userId, productId) => {
      dispatch(
        cartActionTypes.asyncRemoveFromCartStart(token, userId, productId)
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
