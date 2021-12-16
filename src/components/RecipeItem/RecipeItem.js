import React from 'react';
import './recipeItem.modules.css'
import Calories from '../ui/Icons/Calories/Calories';
import Clock from '../ui/Icons/Clock/Clock';
import { useDispatch} from 'react-redux';
import fetchOneRecipe from '../AsyncActions/fetchOneRecipe';

const RecipeItem = ({data}) => {
  const {recipe, _links} = data;
  const dispatch = useDispatch();

  const handlerClick = (url) => {
    if (url) {
      console.log(url)
      dispatch(fetchOneRecipe(url))
    } else { return }    
  }

  let srcImage = 'https://via.placeholder.com/200';
  if (recipe.images.SMALL) {
    srcImage = recipe.images.SMALL.url;
  }

  return (    
      <div className="card">
        <div className="card__image">
          <img src={srcImage} alt={recipe.label} onClick={() => handlerClick(_links.self.href)}/>  
        </div>
        <div className="card__content">
          <span className="card__title" onClick={() => handlerClick(_links.self.href)}>
            {recipe.label.length > 50 ? recipe.label.substr(0, 50) + '...' : recipe.label}
          </span>
          <div className='card__info'>
            <div className='card__lines'><Calories height='16pt' width='16pt' color='#6935FD'/><span className='card__lines-info'>{recipe.calories === 0.0 ? 0 : recipe.calories.toFixed()} kcal</span></div>
            <div className='card__lines'><Clock height='16pt' width='16pt' color='#6935FD'/><span className='card__lines-info'>{recipe.totalTime === 0.0 ? ' -' : recipe.totalTime.toFixed() + ' min'} </span></div>
          </div>
        </div>
      </div>
  );
};

export default RecipeItem;