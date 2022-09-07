import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as authActionTypes from './store/actions/auth';

import Logout from '../src/pages/Auth/Logout/Logout';
import LandingPage from '../src/pages/Landing-Page/Landing-Page';
import Shop from '../src/pages/Shop/Shop';
import Auth from '../src/pages/Auth/Auth';
import Checkout from './pages/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';
import CartPage from './pages/Cart/Cart';
import OrdersPage from '../src/pages/Orders/Orders';
import AdminShop from './pages/Admin-Shop/AdminShop';
import ProductEditor from './pages/ProductEditor/ProductEditor';
import ProductDetail from './pages/Product-Detail/ProductDetail';

const App = (props) => {
  useEffect(() => {
    props.onTryAutoSignIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let routes = (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/shop" element={<Shop />} />
      <Route path={`/shop/:productId`} element={<ProductDetail />}></Route>
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route path="/" exact element={<LandingPage />} />
    </Routes>
  );

  if (props.token) {
    routes = (
      <Routes>
        <Route path="/product-editor" element={<ProductEditor />} />
        <Route path="/admin-shop" element={<AdminShop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path={`/shop/:productId`} element={<ProductDetail />}></Route>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/" exact element={<LandingPage />} />
      </Routes>
    );
  }

  return (
    <BrowserRouter basename="/NodeShopRestAPI">
      <div>
        <Layout>
          <Suspense fallback={Spinner}>{routes}</Suspense>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignIn: () => dispatch(authActionTypes.checkAuthState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
