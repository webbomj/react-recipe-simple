import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Post from './components/Post/Post'


function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('chicken')


  function newQuery(ingredient) {
    setQuery(ingredient)
  }

  async function nextPage(url) {
    try {
      console.log(url)
      await fetch(`${url}`)
      .then(response => response.json())
      .then(data => setData(data))
    } catch(e) {
      console.log('nextPage', e)
    }
    
  }

  

  useEffect(() => {
    try { 
      fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=9aa93e9c&app_key=98b8b38b27fcc09925f8d185765479ff&q=${query}`)
      .then(response => response.json())
      .then(data => setData(data))
    } catch(e) {
      console.log('useEffect', e);
    }
  }, [query])

  // useEffect(() => {
  //   try {
  //     fetch(isPost).then(response => response.json())
  //     .then(data => setPostData(data))
  //   } catch (e) {
  //     console.log('useEffect2', e)
  //   }
      
    
  // }, [isPost])

  return (
   
      <div className="App">
        <Header/>
        
          
      <Hero data={data} newQuery={newQuery} nextPage={nextPage}/>
              
          
        
        <Footer/>
      </div>
      

      
   
  );
}

export default App;
