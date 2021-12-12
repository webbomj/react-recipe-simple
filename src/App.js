import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('chicken')

  function newQuery(ingredient) {
    setQuery(ingredient)
  }

  useEffect(() => {
    try { 
      fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=9aa93e9c&app_key=98b8b38b27fcc09925f8d185765479ff&q=${query}`)
      .then(response => response.json())
      .then(data => setData(data))
    } catch(e) {
      console.log(e);
    }
    
  }, [query])
  return (
    <div className="App">
      <Header/>
      <Hero data={data.hits} newQuery={newQuery}/>
      <Footer/>
    </div>
  );
}

export default App;
