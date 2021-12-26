import React, { useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './header.css';
import Button from '../ui/button/Button';
import Logo from '../ui/Icons/Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { localStorageItems, setModal } from '../Store/RecipesReducer';
 
const Header = () => {

  const dispatch = useDispatch();
  const isModal = useSelector(state => state.data.isModal);
  const quantityLocal = useSelector(state => state.data.localStoreItems);

  useEffect(() => {
    dispatch(localStorageItems(localStorage.length))
  }, [dispatch])

  const hamburgerOpen = () => {
    const topmenu = document.querySelector('.header__topmenu');
    const topLine = document.querySelector('.hamburger-button-top');
    const middleLine = document.querySelector('.hamburger-button-middle');
    const bottomLine = document.querySelector('.hamburger-button-bottom');
    
    topmenu.classList.toggle('header__topmenu--active');
    topLine.classList.toggle('hamburger-button-top-open');
    middleLine.classList.toggle('hamburger-button-middle-open');
    bottomLine.classList.toggle('hamburger-button-bottom-open');
  }

  return (
    <header className='header'>
      <div className='header__topmenu' onClick={() => hamburgerOpen()}>
        <ul className='header__topmenu-list'>
        <li className='header__topmenu-item'><NavLink to='/'>Home</NavLink></li>
          <li className='header__topmenu-item'><Link to='#' onClick={() => dispatch(setModal(!isModal))}>Buy recipie`s book</Link></li>
          <li className='header__topmenu-item'><NavLink to='/favorites'>Favorites</NavLink></li>
        </ul>
      </div>
      <div className='header__logo'>
        <Link to="/">
          <Logo width='150' height='40' color='var(--main-color)' color2='var(--main-color)'/>
        </Link>
      </div>
      <nav className='header__navigation'>
        <ul className='header__navigation-list'>
          <li className='header__navigation-item'><NavLink to='/'>Home</NavLink></li>
          <li className='header__navigation-item'><Link to='#' onClick={() => dispatch(setModal(!isModal))}>Buy recipie`s book</Link></li>
          <li className='header__navigation-item'><NavLink to='/favorites'>Favorites</NavLink>
          {quantityLocal > 0 ?  
            <Link to='/favorites'><div className='header__navigation-favorites'>{quantityLocal}</div></Link>
          :
          null
          }
          </li>
        </ul>
        <div className="hamburger-button" onClick={() => hamburgerOpen()}>
          <div className="hamburger-button-top"></div>
          <div className="hamburger-button-middle"></div>
          <div className="hamburger-button-bottom"></div>
        </div>
      </nav>
      <div className='header__button'>
        <Button text='GitHub' href='https://webbomj.github.io/react-recipe-simple' color='var(--second-color)'/>
      </div>
    </header>
  );
};

export default Header;