import React, { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Post from './components/Post/Post';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import Search from './components/Search/Search';
import Title from './components/Title/Title';
import RecipeList from './components/RecipeList/RecipeList';
import ModalWindow from './components/ModalWindow/ModalWindow';
import Favorites from './components/Favorites/Favorites';
import Error from './components/Error/Error';

const App = () => {

  useEffect(() => {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      const scrollUpButton = document.querySelector('.buttonUp');
      if (scrolled >= 300) {
          scrollUpButton.classList.add('back_to_top-show');
      } else {
          scrollUpButton.classList.remove('back_to_top-show');
      }
  });
  }, [])

  return (
    <div className='App'>
      <Header/>
      <ContentWrapper>
      <Title/>
      <Search/>
        <Routes>
          <Route path='*' element={<Error/>}></Route>
          <Route path='/' element={<RecipeList/>}></Route>
          <Route path='/:postId' element={<Post/>}></Route>
          <Route path='/favorites' element={<Favorites/>}></Route>
          <Route path='/error' element={<Error/>}></Route>
        </Routes>
      </ContentWrapper>
      <ModalWindow/>
      <Footer/>
    </div>
  );
}

export default App;