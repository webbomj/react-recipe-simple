import React, { useState } from 'react';
import './favoritesPanel.css'
import Trash from '../ui/Icons/Trash/Trash'
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite} from '../Store/RecipesReducer';

const FavoritesPanel = () => {

  const [isCheacked, setIsChecked] = useState(false)
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.data.favorites)
  let mainCheckBox = document.querySelector('.favoritesPanel__input+label')

  const chooseAll = () => {
    let allCheckBoxes = document.querySelectorAll('.favoriteList__checkbox-label');
    console.log(mainCheckBox)
    if (isCheacked) {
      allCheckBoxes.forEach(el => {
        el.classList.remove('favoriteList__checkboxes')
      })
      mainCheckBox.classList.remove('favoriteList__checkboxes')
      setIsChecked(false)
    } else {
      allCheckBoxes.forEach(el => {
        el.classList.add('favoriteList__checkboxes')
      })
      mainCheckBox.classList.add('favoriteList__checkboxes')
      setIsChecked(true)
    }
  }

  const removeAll = () => {
    let allCheckBoxes = document.querySelectorAll('.favoriteList__checkboxes.favoriteList__checkbox-label');
    let allRemoveItems = []
    mainCheckBox.classList.remove('favoriteList__checkboxes')
    allCheckBoxes.forEach(element => {
      allRemoveItems.push(favorites.filter(el => el.recipe.label === element.htmlFor));
      localStorage.removeItem(element.htmlFor);
    })
    allRemoveItems.forEach(el => {
      dispatch(removeFavorite(el))})
  }

  return (
    <div className='favoritesPanel'>
      <div className='favoritesPanel__choose'>
        <input type='checkbox' className='favoritesPanel__input' id='favoritesPanel__input'/>
        <label htmlFor='favoritesPanel__input' onClick={() => chooseAll()}></label>
        <span className='favoritesPanel__link' onClick={() => chooseAll()}>Choose all</span>
      </div>
      <div onClick={() => removeAll()}>
        <Trash width='25px' height='25px' color='#e86a23'/>
      </div>
    </div>
  );
};

export default FavoritesPanel;