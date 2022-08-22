import React from 'react';

import Button from '../../../UI/Button/Button';
import './CartItem.css';

const CartItem = (props) => {
  return (
    <li className="cart__item" key={props.productId._id}>
      <h1>{props.productId.title}</h1>
      <h2>Quantity: {props.quantity}</h2>
      <h1>US$ {props.productId.price}</h1>

      {!props.isCheckout && (
        <Button
          buttonType="submit"
          clicked={() => {
            props.onDelete(props.productId);
          }}
          buttonClass="btn danger"
          isEnabled
        >
          Remove from Cart
        </Button>
      )}
    </li>
  );
};

export default CartItem;
