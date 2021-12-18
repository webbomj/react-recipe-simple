import React, {useEffect} from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import './recipeList.css';
import Preloader from '../ui/preloader/Preloader';
import {useDispatch, useSelector } from 'react-redux';
import fetchNextPage from '../AsyncActions/fetchNextPage';
import fetchRecipe from '../AsyncActions/fetchReicepe';

const RecipeList = () => {
  const data = useSelector(state => state.data.data.hits);
  const _links = useSelector(state => state.data.data._links);
  const isLoading = useSelector(state => state.data.loading);
  const query = useSelector(state => state.data.query);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
        dispatch(fetchRecipe(query))
    }catch(e){
      console.log('useEffect1', e)
    }
  }, [query, dispatch]);

  
  let nextPageUrl = '' ;
  if (_links) {
    nextPageUrl = _links.next.href
  } else {
    nextPageUrl = 'http://localhost:3000/'
  }

  return (
    <main className='mainContent-wrapper'>
      <div className='main__recipe'>
        <div className='content-wrapper'>
        {isLoading ? 
        <Preloader/>
        :
        data?.map(el => {
          return <RecipeItem 
                  data={el} 
                  key={el.recipe.calories}
                  />
        })}
        {isLoading ? 
        null :
        <div className='cardNext' onClick={() => dispatch(fetchNextPage(nextPageUrl))}>
          <nav className='cardNext__nav'>Next Page »</nav>
        </div>
        }
        </div>
      </div>
    </main>
  );
};

export default RecipeList;