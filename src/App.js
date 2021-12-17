import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Post from './components/Post/Post';
import ContentWrapper from './components/ContentWrapper/ContentWrapper'
import { useDispatch, useSelector } from 'react-redux';
import fetchRecipe from './components/AsyncActions/fetchReicepe'
import Search from './components/Search/Search';
import Title from './components/Title/Title';

function App() {


  return (
    <div className="App">
      <Header/>
      <ContentWrapper>
      <Title/>
      <Search/>
        <Routes>
          <Route path='/' element={<Hero/>}></Route>
          <Route path='/:postId' element={<Post/>}></Route>
        </Routes>
      </ContentWrapper>
      <Footer/>
    </div>
  );
}

export default App;
