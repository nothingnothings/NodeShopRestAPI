import React from 'react';

import Grid from '../../components/Grid/Grid';
import ProductList from '../../components/ProductList/ProductList';
import Pagination from '../../components/Pagination/Pagination';

import './Shop.css';

const Shop = () => {
  return (
    <React.Fragment>
      <Grid>
        <ProductList isAdmin={false}></ProductList>
      </Grid>
      <Pagination></Pagination>
    </React.Fragment>
  );
};

export default Shop;
