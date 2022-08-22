import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axiosOrder from '../../axios-orders';

import * as cartActionTypes from '../../store/actions/cart';

import Cart from '../../components/Cart/Cart';
import CartItem from '../../components/Cart/CartItemList/CartItem/CartItem';
import CartItemList from '../../components/Cart/CartItemList/CartItemList';
import Spinner from '../../components/UI/Spinner/Spinner';

import '../Cart/Cart.css';
import './Checkout.css';

const Checkout = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [toOrders, setToOrders] = useState(false);

  useEffect(() => {
    setCurrentUser(props.token);
    if (currentUser) {
      props.onFetchCart(props.token, props.userId);
    }
  }, [currentUser]);

  let cart = <Spinner></Spinner>;

  const onToken = (token) => {
    axiosOrder
      .post(
        '/create-order',
        {
          token: JSON.stringify(token),
        },

        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${props.token}`,
            UserId: `${props.userId}`,
          },
        }
      )
      .then((res) => {
        setToOrders(true);
      });
  };

  let redirectToOrders;

  if (toOrders) {
    redirectToOrders = <Navigate to="/orders"></Navigate>;
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
                isCheckout
              ></CartItem>
            );
          })}
        </CartItemList>
        <div className="cart-item__results">
          <h2>Total:</h2>
          <h2>US$ {props.cart.totalPrice.toFixed(2)}</h2>
          <StripeCheckout
            token={onToken}
            stripeKey="pk_test_51JzRu5CmbCw1fMfw67d3Wwex6B9QCbMHYAVNN8TS4mqwzz3jSg9kMa0QuejL7BXnb1MX09efAsMeNnCVF8KHL3WD0096Zc6CqK"
            name="Your Order"
            description="The items you ordered"
            amount={props.cart.totalPrice.toFixed(2) * 100}
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            currency="BRL"
          >
            <div className="stripe-button-el">
              <button>
                <span>Pay with Card</span>
              </button>
            </div>
          </StripeCheckout>
        </div>
        {redirectToOrders}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
