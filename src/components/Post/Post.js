import React from 'react';
import './Post.modules.css'

const Post = ({data}) => {
  console.log(data);
  let imgSRC = data.recipe.images.REGULAR.url;
  if (!data.recipe.images.REGULAR.url) {
    imgSRC = data.recipe.images.SMALL.url
  }

  return (
    <div className='post'>
      <div className='post__picture'><img className="post__img" src={imgSRC} alt='ss'/></div>
      <div className='post__ingredients'></div>
    </div>
  );
};

export default Post;