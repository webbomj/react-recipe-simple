import React, { useEffect, useState } from 'react';
import './Post.css';
import { useDispatch, useSelector} from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import {setPostId} from '../Store/RecipesReducer';
import fetchOneRecipe from '../AsyncActions/fetchOneRecipe';
import Calories from '../ui/Icons/Calories/Calories';
import Protein from '../ui/Icons/Protein/Protein';
import Carbs from '../ui/Icons/Carbs/Carbs';
import Fat from '../ui/Icons/Fat/Fat';
import Weight from '../ui/Icons/Weight/Weight';
import Clock from '../ui/Icons/Clock/Clock';
import Flag from '../ui/Icons/Flag/Flag';
import Preloader from '../ui/preloader/Preloader';
import Favorites from '../ui/Icons/Favorites/Favorites';
import {localStorageItems} from '../Store/RecipesReducer';


const Post = () => {
  let imgSRC = 'https://via.placeholder.com/300';
  let {postId} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneRecipe(`https://api.edamam.com/api/recipes/v2/${postId}?type=public&app_id=9aa93e9c&app_key=98b8b38b27fcc09925f8d185765479ff`));
  }, [postId, dispatch])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const recipe = useSelector(state => state.data.post.recipe);
  const postData = useSelector(state => state.data.post);
  const isLoading = useSelector(state => state.data.loading);
  const error = useSelector(state => state.data.error);
  const [portions, setPortions] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);


  if (recipe !== null && recipe !== undefined) {
    dispatch(setPostId(recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', '')));
    if (recipe.images.REGULAR) {
      imgSRC = recipe.images.REGULAR.url;
    }
  }

  const incPortion = () => {
    setPortions(prev => prev + 1);
  };

  const decPortion = () => {
    if (portions === 1) {
      return
    } else {
      setPortions(prev => prev - 1);
    }
  };

  const addFavorites = () => {
    let localStorageItem = localStorage.getItem(recipe.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', ''));
    if (localStorageItem !== null) {
      localStorage.removeItem(recipe?.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', ''));
    } else {
      localStorage.setItem(recipe?.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', ''), JSON.stringify(postData));
    }
    dispatch(localStorageItems(localStorage.length));
    setIsFavorite(!isFavorite);
  };

  useEffect(() =>{
    let localStorageItem = localStorage.getItem(recipe?.uri.replace('http://www.edamam.com/ontologies/edamam.owl#recipe_', ''));
    if (localStorageItem !== null) {
      setIsFavorite(true);
    }
  }, [recipe?.uri])

  return (
    <>
    {isLoading ? <Preloader/> : 
      error[0] === 'error' ? <Navigate to='error' replace='true' /> :
    <div className='post'>
      <h2 className='post__title'>{recipe?.label}</h2>
      <div className={isFavorite === true ? 'card__icons card__icons--active' : 'card__icons'}>
            <div className='post__title--favoriteIcon' onClick={() => addFavorites()}>
              <Favorites width='30px' height='30px' color='var(--second-color)' />
              <span className='tooltip-text'>{isFavorite ? 'Remove from favorites' : 'Add from favorites'}</span>
            </div>
      </div>
      <div className='post__total-wrapper'>
        <div className='post__total-info'>
          <Flag height='20pt' width='20pt' color='var(--second-color)'/>
          <span className='post__total-info--Weight'>
            {recipe?.cuisineType ? recipe.cuisineType : 'none'}
          </span>
          <Weight height='20pt' width='20pt' color='var(--second-color)'/>
          <span className='post__total-info--Weight'>
          {recipe?.totalWeight ? Math.ceil(recipe.totalWeight) + ' g' : '-'}
          </span>
          <Clock height='17pt' width='20pt' color='var(--second-color)'/>
          <span className='post__total-info--Weight'>
          {recipe?.totalTime ? Math.ceil(recipe.totalTime) + ' min' : '-'}
          </span>
        </div>
      </div>
      <div className='post__wrapper'>
        <div className='post__picture'><img className="post__img" src={imgSRC} alt={recipe?.label}/></div>
        <div className='post__ingredients'>
          <ul className='ingredients__list'>
            {recipe?.ingredientLines.map((rec) => {
              return <li className='ingredients__item' key={rec}>{rec}</li>
            })}
          </ul>
        </div>
      </div>
      <div className='nutritional-value'>The nutritional value per 100 g:</div>
      <div className='resume'>
        <ul className='resume__list'>
          <li className='resume__item'>
            <Calories height='25pt' width='25pt' color='var(--second-color)'/>
            <span className='resume__item--text'>
              { recipe?.totalNutrients.ENERC_KCAL.quantity ?
                Math.ceil((Math.ceil(recipe.totalNutrients.ENERC_KCAL.quantity) / Math.ceil(recipe.totalWeight)) * 100) + ' kcal'
                : '-'
              }
            </span>
          </li>
          <li className='resume__item'>
            <Protein height='25pt' width='25pt' color='var(--second-color)'/>
            <span className='resume__item--text'>
              {recipe?.totalNutrients.PROCNT.quantity ?
                Math.ceil((Math.ceil(recipe.totalNutrients.PROCNT.quantity) / Math.ceil(recipe.totalWeight)) * 100) + ' g'
               : '-'}
            </span>
          </li>
          <li className='resume__item'>
            <Fat height='25pt' width='25pt' color='var(--second-color)'/>
            <span className='resume__item--text'>
              {recipe?.totalNutrients.FAT.quantity ?
                Math.ceil((Math.ceil(recipe.totalNutrients.FAT.quantity) / Math.ceil(recipe.totalWeight)) * 100) + ' g'
              : '-'
              }
            </span>
          </li>
          <li className='resume__item'>
            <Carbs height='25pt' width='25pt' color='var(--second-color)'/>
            <span className='resume__item--text'>
              {recipe?.totalNutrients.CHOCDF.quantity ?
                Math.ceil((Math.ceil(recipe.totalNutrients.CHOCDF.quantity) / Math.ceil(recipe.totalWeight)) * 100) + ' g'
              : '-'
              }
            </span>
          </li>
        </ul>
      </div>
      <div className='ingredients'>
          <div className='ingredients__header'>
            <h3 className='ingredients__title'>
            To make <span className='ingredients__title--count'>{portions === 1 ? portions + ' serving' : portions + ' servings'}</span> you need:
            </h3>
            <div className='ingredients__panel'>
              <div className='ingredients-panel__button ingredients-panel__button--inc' onClick={() => incPortion()}><span className='ingredients-panel__button--text'>&#43;</span></div>
              <div className='ingredients-panel__button ingredients-panel__button--dec' onClick={() => decPortion()}><span className='ingredients-panel__button--text'>&#8722;</span></div>
            </div>
          </div>
          <div className='ingredients__images'>{recipe?.ingredients.map(el => {
            return <img className='ingredients__img' src={el.image} key={el.image} alt={el.food}/>
          })}</div>
          <div className='ingredients__list'>
          <table className='ingredients__table'>
            <tbody>
              <tr>
                <td className='ingredients__table--title'>Necessary ingredients</td>
                <td className='ingredients__table--title'></td>
                <td className='ingredients__table--title title__Measure'></td>
              </tr>
              { recipe?.ingredients.map(el => {
                return  <tr key={Date.now() + Math.random()}>
                  <td  className='ingredients__table--ingredients'>{el.food.slice(0, 1).toUpperCase() + el.food.slice(1)}</td>
                  <td  className='ingredients__table--ingredients ingredients__table--quantity'>
                    {/* {Math.round(el.quantity.toFixed(1) * portions)} */}
                    {String((el.quantity.toFixed(2) * portions).toFixed(1)).split('.')[1] == 0 
                      ? 
                      Number(String((el.quantity.toFixed(2) * portions).toFixed(1)).split('.')[0])
                      : 
                      (el.quantity.toFixed(1) * portions).toFixed(1)
                     }
                  </td>
                  <td  className='ingredients__table--ingredients ingredients__table--measure'>{el.measure === '<unit>' ? 'unit' : el.measure}</td>
                 </tr>
              })}
            </tbody>
          </table>
          </div>
      </div>
    </div>
    }</>
  );
};

export default Post;