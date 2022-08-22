import React from 'react';
import { connect } from 'react-redux';

import * as shopActionTypes from '../../store/actions/shop';

import './Pagination.css';

const Pagination = (props) => {
  let pagination = null;

  if (!props.loading && props.products.length !== 0) {
    pagination = (
      <section className="pagination">
        {props.currentPage > 1 ? (
          <div
            className="pagination__control previous"
            onClick={() => {
              props.onFetchProducts(props.currentPage, 'previous');
            }}
          >
            <p>Back</p>
          </div>
        ) : (
          <div className="pagination__control previous disabled">
            <p>Back</p>
          </div>
        )}
        {props.currentPage < { ...props.products[5] }.value ? (
          <div
            className="pagination__control next"
            onClick={() => {
              props.onFetchProducts(props.currentPage, 'next');
            }}
          >
            <p>Next</p>
          </div>
        ) : (
          <div className="pagination__control next disabled">
            <p>Next</p>
          </div>
        )}
      </section>
    );
  }

  return pagination;
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.shop.currentPage,
    products: state.shop.products,
    loading: state.shop.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: (pageNumber, direction) => {
      dispatch(shopActionTypes.asyncFetchProductsStart(pageNumber, direction));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
