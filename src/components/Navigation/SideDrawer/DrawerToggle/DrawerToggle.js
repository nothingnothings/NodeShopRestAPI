import React from 'react';

import Button from '../../../UI/Button/Button';
import './DrawerToggle.css';

const DrawerToggle = (props) => {
  return (
    <Button
      buttonId={'side-menu-toggle'}
      clicked={props.clicked}
      isEnabled={true}
    >
      <span className="toggle-button__bar"></span>
      <span className="toggle-button__bar"></span>
      <span className="toggle-button__bar"></span>
    </Button>
  );
};

export default DrawerToggle;
