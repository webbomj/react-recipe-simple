import React from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import './recipeList.modules.css'

const RecipeList = ({data, clickOnCard, isPost, next, urlNext}) => {
  return (
    <div className='content-wrapper'>
      {data ? data.map(el => {
        return <RecipeItem data={el} clickOnCard={clickOnCard} key={el.recipe.calories}/>
      }): <span>Loading...</span>}
      {!isPost ? <div className='cardNext' onClick={() => next(urlNext)}>
        <nav className='cardNext__nav'>Next Page »</nav>
      </div> : null}
    </div>
  );
};

export default RecipeList;