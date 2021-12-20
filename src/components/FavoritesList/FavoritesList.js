import React, { useState } from 'react';
import Favorites from '../ui/Icons/Favorites/Favorites';
import "./favoritesList.css"
import { Link } from 'react-router-dom';

const FavoritesList = ({data, removeKey}) => {
console.log(data)
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
      htmlFor={data.recipe.label} 
      onClick={() => setChecked(!isChecked)}></label>
    <div className='favoriteList__content'>
      <div className='favoriteList__recipe'>
        <img className='favoriteList__image' src={srcImage}/>
      </div>
      <div className='favoriteList__info'>
        <Link to={'/' + data.recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', '')} >
          <span className='favoriteList__title'>
            {data.recipe.label.length < 60 ? data.recipe.label : data.recipe.label.substr(0, 60) + '...' }
          </span>
        </Link>
      </div>
      <div className='favoriteList__icons' onClick={() => removeKey(data.recipe.label)}>
        <Favorites width='20px' height='20px' color='white'/>
      </div>

     </div>
    </div>
  );
};

export default FavoritesList;