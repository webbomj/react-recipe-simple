import React from 'react';
import './Post.modules.css'

const Post = ({data}) => {
  const {recipe} = data;
  let imgSRC = 'https://via.placeholder.com/300';

  if (recipe.images.REGULAR) {
    imgSRC = recipe.images.REGULAR.url
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
    </div>
  );
};

export default Post;