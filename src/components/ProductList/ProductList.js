import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';



import * as shopActionTypes from '../../store/actions/shop';
import * as cartActionTypes from '../../store/actions/cart';

import Spinner from '../UI/Spinner/Spinner';
import ProductItem from '../ProductItem/ProductItem';

import './ProductList.css';

const ProductList = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    props.onFetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let productList = <Spinner></Spinner>;

  const addProductToCart = (productId) => {
    navigate('/cart', { replace: true });
    props.onAddToCart(props.token, props.userId, productId);
  };

  if (!props.loading) {
    productList = Object.entries(props.products).map((product, index) => {
      if (index === 0) {
        return Object.entries(product[1]).map((innerProduct) => {
          if (innerProduct[0] === 'value') {
            return innerProduct[1].map((actualProduct) => {
              return (
                <ProductItem
                  isAdmin={props.isAdmin}
                  isEdit={false}
                  productId={actualProduct._id}
                  key={actualProduct.title}
                  title={actualProduct.title}
                  price={actualProduct.price}
                  description={actualProduct.description}
                  imageUrl={actualProduct.imageUrl}
                  token={props.token}
                  addToCart={addProductToCart}
                ></ProductItem>
              );
            });
          }
        });
      }
    });
  }

  return (
    <React.Fragment>
      <div className="product__list">{productList}</div>
      {/* {redirectToCart} */}
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => {
      dispatch(shopActionTypes.asyncFetchProductsStart());
    },
    onAddToCart: (token, userId, productId) => {
      dispatch(cartActionTypes.asyncAddToCartStart(token, userId, productId));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    loading: state.shop.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
