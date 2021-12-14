import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';


function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('chicken')
  const [isPost, setIsPost] = useState('');

  function newQuery(ingredient) {
    setQuery(ingredient)
  }

  function nextPage(url) {
    try {
      console.log(url)
      fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
    } catch(e) {
      console.log('nextPage', e)
    }
  }

  const setPosts = (url) => {
    setIsPost(url)
  }
  
  useEffect(() => {
    try { 
      fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=9aa93e9c&app_key=98b8b38b27fcc09925f8d185765479ff&q=${query}`)
      .then(response => response.json())
      .then(data => setData(data)).then(() => setIsPost(false))
    } catch(e) {
      console.log('useEffect', e);
    }
  }, [query])

  return (
    <div className="App">
      <Header/>
      <Hero 
        data={data} 
        newQuery={newQuery} 
        nextPage={nextPage} 
        isPost={isPost} 
        setIsPost={setPosts}/>
      <Footer/>
    </div>
  );
}

export default App;
