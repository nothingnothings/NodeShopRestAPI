import React from 'react';

import './Button.css';

const Button = (props) => {
  return (
    <button
      id={props.buttonId}
      onClick={props.clicked}
      className={props.buttonClass}
      type={props.buttonType}
      disabled={!props.isEnabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
