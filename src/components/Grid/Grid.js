import React from 'react';

import './Grid.css';

const Grid = (props) => {
  let className = 'grid';

  if (props.landing) {
    className = 'grid landing';
  }

  if (props.isEdit) {
    className = 'grid edit';
  }

  return <div className={className}>{props.children}</div>;
};

export default Grid;
