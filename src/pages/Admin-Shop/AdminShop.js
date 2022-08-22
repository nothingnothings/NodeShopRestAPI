import React from 'react';

import Grid from '../../components/Grid/Grid';
import ProductList from '../../components/ProductList/ProductList';
import Pagination from '../../components/Pagination/Pagination';

import './Admin-Shop.css';

const AdminShop = () => {
  return (
    <React.Fragment>
      <Grid>
        <ProductList isAdmin={true}></ProductList>
      </Grid>
      <Pagination></Pagination>
    </React.Fragment>
  );
};

export default AdminShop;
