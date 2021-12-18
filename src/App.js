import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Post from './components/Post/Post';
import ContentWrapper from './components/ContentWrapper/ContentWrapper'
import Search from './components/Search/Search';
import Title from './components/Title/Title';
import RecipeList from './components/RecipeList/RecipeList';

function App() {

  return (
    <div className="App">
      <Header/>
      <ContentWrapper>
      <Title/>
      <Search/>
        <Routes>
          <Route path='/' element={<RecipeList/>}></Route>
          <Route path='/:postId' element={<Post/>}></Route>
        </Routes>
      </ContentWrapper>
      <Footer/>
    </div>
  );
}

export default App;
