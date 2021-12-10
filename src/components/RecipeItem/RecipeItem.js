import React from 'react';
import './recipeItem.modules.css'

const RecipeItem = ({data}) => {
  return (
    <div className='recipes-main'>
      <div className='recipes-main__title'>{data.title}</div>
      <div className='recipes-main__info'>{data.info}</div>
    </div>
  );
};

export default RecipeItem;