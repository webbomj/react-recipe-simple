import React from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import './recipeList.modules.css'

const RecipeList = ({data, clickOnCard}) => {
  return (
    <div className='content-wrapper'>
      {data ? data.map(el => {
        return <RecipeItem data={el} clickOnCard={clickOnCard} key={el.recipe.calories}/>
      }): <span>Loading...</span>}
    </div>
  );
};

export default RecipeList;