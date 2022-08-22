import React from 'react';

import axiosOrder from '../../../../axios-orders';

import Button from '../../../UI/Button/Button';
import './OrdersItem.css';

const OrdersItem = (props) => {
  const openPdfInvoice = () => {
    axiosOrder
      .get(
        `/orders/${props.orderId}`,
        {
          responseType: 'blob',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${props.token}`,
            UserId: `${props.userId}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          const file = new Blob([res.data], { type: 'application/pdf' });
          const fileUrl = URL.createObjectURL(file);
          window.open(fileUrl);
        }
      });
  };

  return (
    <li className="orders__item" key={props.orderKey}>
      <div className="orders__item-lines">
        <h1 className="order__number">Order #{props.orderId}</h1>
        <ul className="orders__products">
          {props.orderProducts.map((product) => {
            return (
              <li key={product._id}>
                <div className="orders__products-item">
                  <span>Product: </span>
                  {product.product.title} ({product.quantity})
                  <p>
                    <span>Price:</span> ${product.product.price}
                  </p>
                </div>
              </li>
            );
          })}
          <li className="order__price">
            <h2>Total Price: US$ {props.orderPrice.toFixed(2)}</h2>
            <p>
              <Button
                buttonClass="order__link"
                clicked={() => {
                  openPdfInvoice();
                }}
                isEnabled
              >
                Invoice
              </Button>
            </p>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default OrdersItem;
