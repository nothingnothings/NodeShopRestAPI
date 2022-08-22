import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

import './MobileNavigation.css';

const MobileNavigation = (props) => {
  return (
    <nav className={[props.navOpen ? 'mobile-nav open' : 'mobile-nav']}>
      <NavigationItems
        logout={props.token}
        onChooseItem={props.onChooseItem}
        cart={props.cart}
      />
    </nav>
  );
};

export default MobileNavigation;
