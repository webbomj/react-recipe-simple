import React, { useState } from 'react';
import Favorites from '../ui/Icons/Favorites/Favorites';
import "./favoritesList.css"
import { Link } from 'react-router-dom';

const FavoritesList = ({data, removeKey}) => {
const [isChecked, setChecked] = useState(false)
let srcImage = 'https://via.placeholder.com/100';
  if (data.recipe.images.THUMBNAIL) {
    srcImage = data.recipe.images.THUMBNAIL.url;
  }

  return (
    <div className='favoriteList'>
    <input className='favoriteList__checkbox' id={data.recipe.label} type='checkbox'/>
    <label 
      className={isChecked ? 'favoriteList__checkboxes favoriteList__checkbox-label' : 'favoriteList__checkbox-label' } 
      htmlFor={data.recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', '')} 
      onClick={() => setChecked(!isChecked)}></label>
    <div className='favoriteList__content'>
      <div className='favoriteList__recipe'>
        <img className='favoriteList__image' src={srcImage}/>
      </div>
      <div className='favoriteList__info'>
        <Link to={'/' + data.recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', '')} >
          <span className='favoriteList__title'>
            {data.recipe.label.length < 50 ? data.recipe.label : data.recipe.label.substr(0, 50) + '...' }
          </span>
        </Link>
        <div className='favoriteList__info--text'>
          [Total weight: {Math.round(data.recipe.totalWeight)} g, total time: {Math.round(data.recipe.totalTime)} m, 
          cuisine type: {data.recipe.cuisineType}, meal type: {data.recipe.mealType}, 
          dish type: {data.recipe.mealType}, total energy: {Math.round(data.recipe.calories)} kcal,
          total fat: {Math.round(data.recipe.totalNutrients.FAT.quantity)} g, total carbs: {Math.round(data.recipe.totalNutrients.CHOCDF.quantity)} g,
          total protein: {Math.round(data.recipe.totalNutrients.PROCNT.quantity)} g
          ]
        </div>
      </div>
      <div className='favoriteList__icons' onClick={() => removeKey(data.recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', ''))}>
        <div className='favoriteList__icon-favorite'>
          <Favorites width='20px' height='20px' color='white'/>
          <span className='tooltip-text'>Remove from favorites</span>
        </div>
      </div>

     </div>
    </div>
  );
};

export default FavoritesList;