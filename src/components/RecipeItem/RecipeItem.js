import React from 'react';
import './recipeItem.modules.css'

const RecipeItem = ({data}) => {
  const {recipe} = data;
  return (
    // <div className='recipes-main'>
    //   <div className='recipes-main__title'>{data.title}</div>
    //   <div className='recipes-main__info'>{data.info}</div>
    // </div>
    
      <div className="card">
        <div className="card__image">
          <img src={recipe.images.SMALL.url} alt={recipe.label}/>  
        </div>
        <div className="card__content">
          <span className="card__title">{recipe.label}</span>
          <p className='card__info'>{data.info}</p>
        </div>
      </div>
    
  
    
  );
};

export default RecipeItem;