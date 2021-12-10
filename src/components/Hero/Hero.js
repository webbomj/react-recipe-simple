import React from 'react';
import RecipeList from '../RecipeList/RecipeList';
import './hero.modules.css'

const Hero = () => {
  return (
    <main className='wrapper'>
      <div className='main__header'>
        <h1>Find your ideal home</h1>
        <p>Search from more than 19 million of inspected appartments,  houses, cottages, villas, manors and mansions</p>
      </div>
      <div className='main__search'>
        <div className='icon__search'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 20L15.0962 15.0962M15.0962 15.0962C16.2725 13.9199 17 12.2949 17 10.5C17 6.91015 14.0899 4 10.5 4C6.91015 4 4 6.91015 4 10.5C4 14.0899 6.91015 17 10.5 17C12.2949 17 13.9199 16.2725 15.0962 15.0962Z" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
          <input className='search__input' type='text' placeholder='Search for address' />
          <button>Search</button>
      </div>
      <div className='main__recipe'>
        <RecipeList/>
      </div>
    </main>
  );
};

export default Hero;