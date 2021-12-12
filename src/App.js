import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    try { 
      fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=9aa93e9c&app_key=98b8b38b27fcc09925f8d185765479ff&q=chicken`)
      .then(response => response.json())
      .then(data => setData(data))
    } catch(e) {
      console.log(e);
    }
    
  }, [])
  return (
    <div className="App">
      <Header/>
      <Hero data={data.hits}/>
      <Footer/>
    </div>
  );
}

export default App;
