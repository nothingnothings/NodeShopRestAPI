import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const NavigationItem = (props) => {
  return (
    <li
      className={
        props.type === 'main' ? 'main-header__item' : 'mobile-nav__item'
      }
    >
      <NavLink to={props.link} exact="true" onClick={props.clicked}>
        {props.text}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
