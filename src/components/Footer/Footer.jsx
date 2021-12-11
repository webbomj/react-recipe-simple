import React from 'react';
import './footer.modules.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__left'><span>Housen 	&#169; {new Date().getFullYear()}</span></div>
        <div className='footer__rigth'>
          <ul className='footer__list'>
            <li className='footer__item'><a href='#'>About</a></li>
            <li className='footer__item'><a href='#'>FAQ</a></li>
            <li className='footer__item'><a href='#'>Terms & Conditions</a></li>
            <li className='footer__item'><a href='#'>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;