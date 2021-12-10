import React from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import './recipeList.modules.css'


const RecipeList = ({data = []}) => {
  return (
    <>
      {data && data.map(el => {
        return <RecipeItem data={el} key={el.id}/>
      })}
    </>
  );
};

export default RecipeList;