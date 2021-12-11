import React from 'react';
import './recipeItem.modules.css'

const RecipeItem = ({data}) => {
  return (
    <div className='recipes-main'>
      <div className='recipes-main__title'>{data.title}</div>
      <div className='recipes-main__info'>{data.info}</div>


  
    
      {/* <div className="card">
        <div className="card-image">
          <img src="images/sample-1.jpg" />
          <span className="card-title">{data.title}</span>
        </div>
        <div className="card-content">
          <p>{data.info}</p>
        </div>
      </div> */}
    
  
    </div>
  );
};

export default RecipeItem;