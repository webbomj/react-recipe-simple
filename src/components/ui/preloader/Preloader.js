import React from 'react';
import './preloader.modules.css'

const Preloader = () => {
  return (
    <div className='preloader'>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;