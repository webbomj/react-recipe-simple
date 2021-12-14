import React from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import './recipeList.modules.css'
import Preloader from '../ui/preloader/Preloader';


const RecipeList = ({data, clickOnCard, handleClickNextPage, urlNext}) => {
  return (
    <div className='content-wrapper'>
      {data ? data.map(el => {
        return <RecipeItem data={el} clickOnCard={clickOnCard} key={el.recipe.calories}/>
      }): <Preloader/>}
      {!data ? 
      null :
      <div className='cardNext' onClick={() => handleClickNextPage(urlNext)}>
        <nav className='cardNext__nav'>Next Page »</nav>
      </div>
      }
    </div>
  );
};

export default RecipeList;