import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import * as orderActionTypes from '../../store/actions/order';
import * as cartActionTypes from '../../store/actions/cart';

import Spinner from '../UI/Spinner/Spinner';
import Orders from './Orders/Orders';
import OrdersItem from './Orders/OrdersItem/OrdersItem';
import Wrapper from '../Wrapper/Wrapper';
import CartItemList from '../Cart/CartItemList/CartItemList';
import NoProduct from '../Cart/NoProduct/NoProduct';
import './OrderBoard.css';

const OrderBoard = (props) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    setCurrentUser(props.token);
    if (currentUser) {
      props.onFetchOrders(props.token, props.userId);
      props.onFetchCart(props.token, props.userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  let orders = <Spinner></Spinner>;

  if (!props.loading && props.orders === []) {
    orders = (
      <Wrapper>
        <CartItemList>
          <NoProduct>
            <li class="no-product cart-item">
              <h2 style={{ fontFamily: 'Lato' }}>
                You haven't placed any orders yet.
              </h2>
            </li>
          </NoProduct>
        </CartItemList>
      </Wrapper>
    );
  }

  if (!props.loading && props.orders.length >= 1) {
    const rawOrderList = props.orders[0];

    const actualOrderList = [];

    Object.entries(rawOrderList).map((object) => {
      return actualOrderList.push(object[1]);
    });

    orders = (
      <Orders>
        {
          // eslint-disable-next-line array-callback-return
          actualOrderList.map((order) => {
            if (order !== 'orders') {
              return (
                <OrdersItem
                  key={order._id}
                  orderId={order._id}
                  orderKey={order._id}
                  orderProducts={order.products}
                  orderPrice={order.totalPrice}
                  token={props.token}
                  userId={props.userId}
                ></OrdersItem>
              );
            }
          })
        }
      </Orders>
    );
  }

  return <div className="order-board">{orders}</div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) => {
      dispatch(orderActionTypes.asyncFetchOrdersStart(token, userId));
    },
    onFetchCart: (token, userId) => {
      dispatch(cartActionTypes.asyncFetchCartStart(token, userId));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
    loading: state.orders.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderBoard);
