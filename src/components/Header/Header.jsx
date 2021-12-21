import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './header.css'
import Button from '../ui/button/Button';
import Logo from '../ui/Icons/Logo/Logo'
import { useDispatch, useSelector } from 'react-redux';
import { localStorageItems, setModal } from '../Store/RecipesReducer';
 
const Header = () => {

  const dispatch = useDispatch();
  const isModal = useSelector(state => state.data.isModal)
  const quantityLocal = useSelector(state => state.data.localStoreItems)


  useEffect(() => {
    dispatch(localStorageItems(localStorage.length))
  }, [dispatch])

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
          <li className='header__navigation-item'><Link to='/favorites'>Favorites</Link>
          

          {quantityLocal > 0 ?  
            <Link to='/favorites'><div className='header__navigation-favorites'>{quantityLocal}</div></Link>
          :
          null
          }
          </li>
        </ul>
      
      </nav>
      <div className='header__button'>
        <Button text='GitHub' href='https://webbomj.github.io/react-recipe-simple' color='white'/>
      </div>
    </header>
  );
};


export default Header;