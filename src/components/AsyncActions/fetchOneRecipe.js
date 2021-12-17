import {addPostData, setFlag} from '../Store/RecipesReducer'

const fetchOneRecipe = (url) => {
  return function(dispatch) {
    dispatch(setFlag('preloader'))
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(addPostData(json)))
      .then(() => dispatch(setFlag('post')))
  }
}

export default fetchOneRecipe