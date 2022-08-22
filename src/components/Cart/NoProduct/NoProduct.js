import React from 'react';

import './NoProduct.css';

const NoProduct = (props) => {
  return (
    <div className="no-product" style={props.productStyle}>
      {props.children}
    </div>
  );
};

export default NoProduct;
