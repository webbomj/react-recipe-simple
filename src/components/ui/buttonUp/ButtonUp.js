import React from 'react';
import './buttonUp.css';

const ButtonUp = ({width, height, color}) => {

  const scrollToUp = () => {
    const rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='buttonUp' onClick={() => scrollToUp()}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width={width} height={height} viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={color} stroke="none">
        <path d="M510 5104 c-197 -52 -360 -187 -446 -369 -69 -145 -64 18 -64 -2175 0 -2193 -5 -2030 64 -2175 69 -146 175 -252 321 -321 145 -69 -18 -64 2175 -64 2209 0 2032 -6 2185 70 140 69 236 165 305 305 76 153 70 -23 70 2185 0 2193 5 2030 -64 2175 -69 146 -175 253 -318 320 -149 70 20 65 -2183 64 -1712 0 -1998 -2 -2045 -15z m2095 -1638 c33 -10 1643 -1627 1651 -1659 16 -65 -27 -138 -92 -156 -73 -19 -52 -38 -851 761 l-753 753 -753 -753 c-799 -799 -778 -780 -851 -761 -65 18 -108 91 -92 156 10 39 1619 1650 1661 1662 29 9 40 8 80 -3z"/>
        </g>
      </svg>
    </div>
  );
};

export default ButtonUp;