import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './footer.css'
import { setModal } from '../Store/RecipesReducer';

const Footer = () => {

  const dispatch = useDispatch();
  const isModal = useSelector(state => state.data.isModal)
  
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__left'><span>Recipier 	&#169; {new Date().getFullYear()}</span></div>
        <div className='footer__rigth'>
          <ul className='footer__list'>
            <li className='footer__item'><Link to='/'>Home</Link></li>
            <li className='footer__item'><Link to='#' onClick={() => dispatch(setModal(!isModal))}>Buy recipie`s book</Link></li>
            <li className='footer__item'><Link to='/'>Terms & Conditions</Link></li>
            <li className='footer__item'><Link to='/'>Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;