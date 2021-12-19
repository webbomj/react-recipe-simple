import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'
import Button from '../ui/button/Button';
import Logo from '../ui/Icons/Logo/Logo'
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../Store/RecipesReducer';
 
const Header = () => {

  const dispatch = useDispatch();
  const isModal = useSelector(state => state.data.isModal)

  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to="/">
          <Logo/>
        </Link>
      </div>
      <nav className='header__navigation'>
        <ul className='header__navigation-list'>
          <li className='header__navigation-item'><Link to='/'>Home</Link></li>
          <li className='header__navigation-item'><Link to='#' onClick={() => dispatch(setModal(!isModal))}>Buy recipie`s book</Link></li>
          <li className='header__navigation-item'><Link to='/'>Some</Link></li>
        </ul>
      </nav>
      <div>
        <Button text='GitHub' href='#' color='white'/>
      </div>
    </header>
  );
};


export default Header;