import React, {useState} from 'react';
import RecipeList from '../RecipeList/RecipeList';
import './hero.modules.css'

const Hero = ({data, newQuery}) => {
  const [ingredient, setIngredient] = useState('');


    function handlerInput(e) {
      setIngredient(e.target.value);
    }

    function handlerClick() {
      if (ingredient) {
        newQuery(ingredient)
      }
    }

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        newQuery(ingredient)
      }
    }

    return (
    <main className='wrapper'>
      <div className='main__header'>
        <h1>Find your ideal recipe</h1>
        <p>Search from over 1 million recipes, dishes, drinks, indicating: calories, proteins, fats and carbohydrates</p>
      </div>
      <div className='main__search'>
        <div className='icon__search'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 20L15.0962 15.0962M15.0962 15.0962C16.2725 13.9199 17 12.2949 17 10.5C17 6.91015 14.0899 4 10.5 4C6.91015 4 4 6.91015 4 10.5C4 14.0899 6.91015 17 10.5 17C12.2949 17 13.9199 16.2725 15.0962 15.0962Z" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
          <div className='search'>
            <input 
              className='search__input' 
              type='text' 
              placeholder='e.g. Chiken' 
              value={ingredient} 
              onChange={(e) => handlerInput(e)}
              onKeyPress={(e) => handleKeyPress(e)}
            />  
          </div>
          <button onClick={() => handlerClick()} disabled={!ingredient}>Search</button>
      </div>
      <div className='main__recipe'>
        <RecipeList data={data}/>
      </div>
    </main>
  );
};

export default Hero;