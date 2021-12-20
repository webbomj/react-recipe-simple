import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoritesList from '../FavoritesList/FavoritesList';
import FavoritesPanel from '../FavoritesPanel/FavoritesPanel';
import './favorites.css'
import { setFavorite } from '../Store/RecipesReducer';

const Favorites = () => {
  let dataLocalStorage = []
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.favorites)

useEffect(() => {
  let allKeysLocalStorage = [];
  for (let i = 0; i < localStorage.length; i++) {
    allKeysLocalStorage.push(localStorage.key(i))
    dataLocalStorage.push(JSON.parse(localStorage.getItem(allKeysLocalStorage[i])))
  }
  dispatch(setFavorite(dataLocalStorage))
  console.log(dataLocalStorage)
}, [])

  const deleteLocalStorageItem = (keyDelete) => {
    dispatch(setFavorite(data.filter(el => el.recipe.label !== keyDelete)))
    localStorage.removeItem(keyDelete);
  }

  return (
    <>
    <FavoritesPanel/>
    <div className='favorites__wrapper'>
      {data?.length ? 
        data?.map(el => {
          return <FavoritesList data={el} removeKey={deleteLocalStorageItem} key={el.recipe.label}/>
        })
      :
      <span className='favorites__nothing'>No items in favorites</span>
    }
    </div>
    </>
  )
  
}

export default Favorites;