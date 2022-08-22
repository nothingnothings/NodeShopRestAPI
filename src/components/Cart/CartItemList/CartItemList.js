import React from 'react';

import './CartItemList.css';

const CartItemList = (props) => {
  return <ul className="cart__item-list">{props.children}</ul>;
};

export default CartItemList;
