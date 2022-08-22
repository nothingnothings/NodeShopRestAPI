import React from 'react';

import './Backdrop.css';

const Backdrop = (props) => {
  return (
    <div
      className={['backdrop', props.open ? 'open' : ''].join(' ')}
      onClick={props.clicked}
    />
  );
};

export default Backdrop;
