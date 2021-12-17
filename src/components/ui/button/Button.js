import React from 'react';
import './button.css'

const Button = ({text, href, color}) => {
  return (
    <a className={color === 'white'? 'whiteButton' : 'purpleButton'} href={href}>{text}</a>
  );
};

export default Button;