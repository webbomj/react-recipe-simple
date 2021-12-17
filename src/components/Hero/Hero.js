import React, {useEffect, useState} from 'react';
import RecipeList from '../RecipeList/RecipeList';
import './hero.css'
import Post from '../Post/Post'
import { useSelector, useDispatch } from 'react-redux';
import Preloader from '../ui/preloader/Preloader';
import fetchRecipe from '../AsyncActions/fetchReicepe'

const Hero = () => {
  const [flag, setFlag] = useState('preloader');
  const dispatch = useDispatch();
  const whatsFlag = useSelector(state => state.data.flag)
  const query = useSelector(state => state.data.query)

useEffect(() => {
  try {
    dispatch(fetchRecipe(query))
  }catch(e){
    console.log('useEffect1', e)
  }
}, [query])

    useEffect(() => {
        if (whatsFlag === 'list') {
          setFlag('list');
        }

    }, [whatsFlag])
    
    return (
    <main className='mainContent-wrapper'>
      <div className='main__recipe'>
        { flag === 'list' && <RecipeList/>}
      </div>
    </main>
  );
};

export default Hero;