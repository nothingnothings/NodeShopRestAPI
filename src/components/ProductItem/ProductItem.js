import React from 'react';

import Hexagon from './Hexagon/Hexagon';
import ProductBox from './ProductBox/ProductBox';

import './ProductItem.css';

const ProductItem = (props) => {
  return (
    <div className="product__item">
      <Hexagon title={props.title} imageUrl={props.imageUrl}></Hexagon>
      <ProductBox
        title={props.title}
        price={props.price}
        description={props.description}
        isAdmin={props.isAdmin}
        isEdit={props.isEdit}
        changed={props.changed}
        controls={props.controls}
        token={props.token}
        productId={props.productId}
        onAddToCart={props.addToCart}
      ></ProductBox>
    </div>
  );
};

export default ProductItem;
