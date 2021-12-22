import React, {useEffect} from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import './recipeList.css';
import Preloader from '../ui/preloader/Preloader';
import {useDispatch, useSelector } from 'react-redux';
import fetchNextPage from '../AsyncActions/fetchNextPage';
import fetchRecipe from '../AsyncActions/fetchReicepe';
import { Navigate } from 'react-router';

const RecipeList = () => {
  const data = useSelector(state => state.data.data.hits);
  const _links = useSelector(state => state.data.data._links);
  const isLoading = useSelector(state => state.data.loading);
  const query = useSelector(state => state.data.query);
  const error = useSelector(state => state.data.error);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
        dispatch(fetchRecipe(query));
    }catch(e){
      console.log('useEffect1', e);
    }
  }, [query, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  let nextPageUrl = '' ;
  if (_links) {
    nextPageUrl = _links?.next?.href;
  } else {
    nextPageUrl = 'http://localhost:3000/';
  }

  const clickNextPage = () => {
    dispatch(fetchNextPage(nextPageUrl));
    window.scrollTo(0, 0);
  }

  return (
    <main className='mainContent-wrapper'>
      <div className='main__recipe'>
        <div className='content-wrapper'>
        {isLoading ? 
        <Preloader/>
        :
          error[0] === 'error' ? <Navigate to='error' replace='true'/>
          :
        data?.map(el => {
          return <RecipeItem 
                  data={el} 
                  key={el.recipe.calories * Math.random()}
                  />
        })}
        {isLoading ? 
        null :
        <div className='cardNext' onClick={() => clickNextPage()}>
          <nav className='cardNext__nav'>Next Page »</nav>
        </div>
        }
        </div>
      </div>
    </main>
  );
};

export default RecipeList;