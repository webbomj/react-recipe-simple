import React, { useState } from 'react';
import './Post.modules.css'

const Post = ({data}) => {
  const {recipe} = data;
  let imgSRC = 'https://via.placeholder.com/300';
  let arrIngredients = [];
  const [portions, setPortions] = useState(1)
  if (recipe.images.REGULAR) {
    imgSRC = recipe.images.REGULAR.url
  }

  if (recipe.ingredients) {
    recipe.ingredients.forEach(el => {
      let ingred = {
        food: el.food,
        quantity: el.quantity,
        measure: el.measure,
        image: el.image,
      }
      arrIngredients.push(ingred);
    })
  }

  const incPortion = () => {
    setPortions(prev => prev + 1)
  }

  const decPortion = () => {
    setPortions(prev => prev - 1)
  }

  return (
    <div className='post'>
      <h2 className='post__title'>{recipe.label}</h2>
      <div className='post__wrapper'>
        <div className='post__picture'><img className="post__img" src={imgSRC} alt={recipe.label}/></div>
        <div className='post__ingredients'>
          <ul className='ingredients__list'>
            {recipe.ingredientLines.map((rec) => {
              return <li className='ingredients__item' key={rec}>{rec}</li>
            })}
          </ul>
        </div>
      </div>
      <div className='ingredients'>
          <div className='ingredients__header'>
            <h3 className='ingredients__title'>To make {portions} servings you need:</h3>
            <div className='ingredients__panel'>
              <button className='ingredients-panel__inc' onClick={() => incPortion()}>+</button>
              <button className='ingredients-panel__dec' onClick={() => decPortion()}>-</button>
            </div>
          </div>
          <div className='ingredients__images'>{arrIngredients.map(el => {
            return <img className='ingredients__img' src={el.image} key={el.image} alt={el.food}/>
          })}</div>
          <div className='ingredients__list'>
          <table>
            <tbody>
              <tr>
                <td>Necessary ingredients</td>
                <td>Quantity</td>
                <td></td>
              </tr>
                {arrIngredients.map(el => {
                  return (
                    <tr key={el.food}>
                    <td>{el.food}</td>
                    <td>{el.quantity}</td>
                    <td>{el.measure}</td>
                    </tr>
                  ) 
                })}
            </tbody>
          </table>
          </div>
      </div>
    </div>
  );
};

export default Post;