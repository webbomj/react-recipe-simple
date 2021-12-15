import React, { useState } from 'react';
import './Post.modules.css'

const Post = ({data}) => {
  const {recipe} = data;
  let imgSRC = 'https://via.placeholder.com/300';
  let arrIngredients = [];
  const [portions, setPortions] = useState(1);
  const [ing, setIng] = useState(arrIngredients);
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
    let arrNewQuantity = ing.map((el, i) => {
      return {...el, quantity: el.quantity + arrIngredients[i].quantity}
    })
    setIng(arrNewQuantity)
  }

  const decPortion = () => {
    if (portions === 1) {
      return
    } else {
      setPortions(prev => prev - 1)
      let arrNewQuantity = ing.map((el, i) => {
        return {...el, quantity: el.quantity - arrIngredients[i].quantity}
      })
      setIng(arrNewQuantity)
    }
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
            <h3 className='ingredients__title'>
            To make <span className='ingredients__title--count'>{portions === 1 ? portions + ' serving' : portions + ' servings'}</span> you need:
            </h3>
            <div className='ingredients__panel'>
              <div className='ingredients-panel__button ingredients-panel__button--inc' onClick={() => incPortion()}><span className='ingredients-panel__button--text'>&#43;</span></div>
              <div className='ingredients-panel__button ingredients-panel__button--dec' onClick={() => decPortion()}><span className='ingredients-panel__button--text'>&#8722;</span></div>
            </div>
          </div>
          <div className='ingredients__images'>{ing.map(el => {
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
                {ing.map(el => {
                  return (
                    <tr key={el.food}>
                    <td  className='ingredients__table--ingredients'>{el.food.slice(0, 1).toUpperCase() + el.food.slice(1)}</td>
                    <td  className='ingredients__table--ingredients ingredients__table--quantity'>{el.quantity}</td>
                    <td  className='ingredients__table--ingredients ingredients__table--measure'>{el.measure === '<unit>' ? 'unit' : el.measure}</td>
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