import React, { useEffect, useState } from 'react';
import './recipeItem.css';
import { Link } from 'react-router-dom';
import Calories from '../ui/Icons/Calories/Calories';
import Clock from '../ui/Icons/Clock/Clock';
import { useDispatch} from 'react-redux';
import fetchOneRecipe from '../AsyncActions/fetchOneRecipe';
import {setPostId} from '../Store/RecipesReducer';
import Favorites from '../ui/Icons/Favorites/Favorites';
import {localStorageItems} from '../Store/RecipesReducer';


const RecipeItem = ({data}) => {
  const {recipe, _links} = data;
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const handlerClick = (url) => {
    if (url) {
      dispatch(fetchOneRecipe(url));
      dispatch(setPostId(recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', '')));
    } else { return }    
  }
  

  let srcImage = 'https://via.placeholder.com/200';
  if (recipe.images.SMALL) {
    srcImage = recipe.images.SMALL.url;
  }

  const addFavorites = () => {
    const localStorageItem = localStorage.getItem(recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', ''));
    if (localStorageItem === null || localStorageItem.length === 0) {
      localStorage.setItem(recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', ''), JSON.stringify(data));
    } else {
      localStorage.removeItem(recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', ''));
    }
    dispatch(localStorageItems(localStorage.length));
    const recipess = document.getElementById(recipe.label);
    recipess.classList.toggle('card__icons--active');
    setIsFavorite(!isFavorite);
  }

  useEffect(() => {
    let localStorageItem = localStorage.getItem(recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', ''));
    if (localStorageItem !== null) {
      setIsFavorite(true);
    }
  }, [recipe.uri])
  
  return (    
      <div className="card">
        <div className="card__image">
          <Link to={recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', '')}>
            <img src={srcImage} alt={recipe.label} onClick={() => handlerClick(_links.self.href)}/>
          </Link>
          <div className={isFavorite === true ? 'card__icons card__icons--active' : 'card__icons'} id={recipe.label} >
            <div  className="card__icons--favorite" onClick={() => addFavorites()}>
              <Favorites width='30px' height='30px' color='white' />
              <span className='tooltip-text'>{isFavorite ? 'Remove from favorites' : 'Add from favorites'}</span>
            </div>
          </div>
        </div>
        <div className="card__content">
          <span className="card__title" onClick={() => handlerClick(_links.self.href)}>
            <Link className="card__title--link"  to={recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', '')}>
              {recipe.label.length > 50 ? recipe.label.substr(0, 50) + '...' : recipe.label}
            </Link>
          </span>
          <div className='card__info'>
            <div className='card__lines'><Calories height='16pt' width='16pt' color='#6935FD'/>
              <span className='card__lines-info'>{recipe.calories === 0.0 ? 0 : recipe.calories.toFixed()} kcal
              </span>
            </div>
            <div className='card__lines'><Clock height='16pt' width='16pt' color='#6935FD'/>
              <span className='card__lines-info'>{recipe.totalTime === 0.0 ? ' -' : recipe.totalTime.toFixed() + ' min'}
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RecipeItem;