import React from 'react';

import './Hexagon.css';

const Hexagon = (props) => {
  return (
    <div className="hexagon">
      <div className="hexagon image">
        <img src={props.imageUrl} alt={props.title}></img>
      </div>
    </div>
  );
};

export default Hexagon;
