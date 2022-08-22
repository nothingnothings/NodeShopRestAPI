import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as cartActionTypes from '../../store/actions/cart';

import Toolbar from '../../components/Toolbar/Toolbar';
import Aux from '../Auxiliary/Auxiliary';
import Backdrop from '../../components/Backdrop/Backdrop';

import './Layout.css';

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  useEffect(() => {
    if (props.idToken && props.userId) {
      props.onFetchCart(props.idToken, props.userId);
    }
  }, [props]);

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
    setShowBackdrop(true);
  };

  const mobileNavHandler = () => {
    setShowSideDrawer(false);
    setShowBackdrop(false);
  };

  return (
    <Aux>
      <Backdrop open={showBackdrop} clicked={mobileNavHandler}></Backdrop>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        navOpen={showSideDrawer}
        onChooseItem={mobileNavHandler}
        cart={props.cart}
      />
      <main>{props.children}</main>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    idToken: state.auth.token,
    userId: state.auth.userId,
    cart: state.cart.products.length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCart: (token, userId) => {
      dispatch(cartActionTypes.asyncFetchCartStart(token, userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
