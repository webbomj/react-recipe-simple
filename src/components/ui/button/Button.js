import React from 'react';
import './button.css';

const Button = ({text, href, color}) => {
  return (
    <div className='buttonUi__wrapper'>
      <a className={color === 'var(--second-color)'? 'whiteButton' : 'purpleButton'} href={href}>{text}</a>
    </div>
  );
};

export default Button;