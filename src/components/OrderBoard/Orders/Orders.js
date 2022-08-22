import React from 'react';

import './Orders.css';

const Orders = (props) => {
  return <ul className="orders">{props.children}</ul>;
};

export default Orders;
