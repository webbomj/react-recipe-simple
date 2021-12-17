import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import fetchRecipe from './components/AsyncActions/fetchReicepe'

function App() {
  const dispatch = useDispatch();
  const query = useSelector(state => state.data.query)

useEffect(() => {
  try {
    dispatch(fetchRecipe(query))
  }catch(e){
    console.log('useEffect1', e)
  }
}, [query])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Hero/>}>
        </Route>
        <Route path='/e' element={<Footer/>}>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
