import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosOrder from '../../axios-orders';

import * as cartActionTypes from '../../store/actions/cart';

import Hexagon from '../../components/ProductItem/Hexagon/Hexagon';
import Button from '../../components/UI/Button/Button';

import './ProductDetail.css';
import '../../components/OrderBoard/Orders/OrdersItem/OrdersItem.css';

const ProductDetail = (props) => {
  let { productId } = useParams();

  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    axiosOrder
      .get(`/shop/${productId}`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch Product Data');
        }
        return res.data.product;
      })
      .then((product) => {
        setProductDetail(product);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let addToCartButton = (
    <NavLink className="button" to="/auth">
      Add to Cart
    </NavLink>
  );

  const addProductToCartHandler = (productId) => {
    props.onAddToCart(props.token, props.userId, productId);
  };

  if (props.token) {
    addToCartButton = (
      <Button
        clicked={addProductToCartHandler}
        buttonClass="button"
        isEnabled
        buttonType="button"
      >
        Add to Cart
      </Button>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-detail__controls">
        <div className="product-detail__highlight">
          <h1>{productDetail.title}</h1>
          <Hexagon
            imageUrl={`../${productDetail.imageUrl}`}
            title={productDetail.title}
          ></Hexagon>
          <h3 className="product-detail__description">{productDetail.description}</h3>
        </div>
        <div className="orders__item centered">
          <div className="orders__item-lines product-detail">
            <h2>US$ {productDetail.price}</h2>
            {addToCartButton}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (token, userId, productId) => {
      dispatch(cartActionTypes.asyncAddToCartStart(token, userId, productId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
