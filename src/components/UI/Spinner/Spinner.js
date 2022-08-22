import React from 'react';

import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner">
      <section className="receptacle">
        <div className="line-outer">
          <div className="line-inner">
            <span className="hex6"></span>
            <span className="hex3"></span>
          </div>
        </div>
        <div className="line-outer">
          <div className="line-inner">
            <span className="hex1"></span>
            <span className="hex4"></span>
          </div>
        </div>
        <div className="line-outer">
          <div className="line-inner">
            <span className="hex5"></span>
            <span className="hex2"></span>
          </div>
        </div>
      </section>
      <p className="loading-text">
        Loading<span></span>
      </p>
    </div>
  );
};

export default Spinner;
