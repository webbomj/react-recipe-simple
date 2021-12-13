import React, {ReactSVG} from 'react';
import './recipeItem.modules.css'
import Calories from '../ui/Icons/Calories/Calories';
import Clock from '../ui/Icons/Clock/Clock';

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
          <div className='card__info'>
            <div className='card__lines'><Calories height='16pt' width='16pt' color='#6935FD'/><span className='card__lines-info'>{recipe.calories === 0.0 ? 0 : recipe.calories.toFixed()} kcal</span></div>
            <div className='card__lines'><Clock height='16pt' width='16pt' color='#6935FD'/><span className='card__lines-info'>{recipe.totalTime === 0.0 ? ' -' : recipe.totalTime.toFixed() + ' min'} </span></div>
          </div>
        </div>
      </div>
    
  
    
  );
};

export default RecipeItem;