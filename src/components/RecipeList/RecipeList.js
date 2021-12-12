import React from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import './recipeList.modules.css'


const RecipeList = ({data = []}) => {
  return (
    <div className='content-wrapper'>
      {data && data.map(el => {
        return <RecipeItem data={el} key={el.recipe.calories}/>
      })}
    </div>
  );
};

export default RecipeList;