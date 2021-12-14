import React from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import './recipeList.modules.css'

const RecipeList = ({data, clickOnCard, handleClickNextPage, urlNext}) => {
  return (
    <div className='content-wrapper'>
      {data ? data.map(el => {
        return <RecipeItem data={el} clickOnCard={clickOnCard} key={el.recipe.calories}/>
      }): <span>Loading...</span>}
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