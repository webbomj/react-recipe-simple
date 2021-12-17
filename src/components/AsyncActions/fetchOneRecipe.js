import {addPostData, setFlag, setLoading} from '../Store/RecipesReducer'

const fetchOneRecipe = (url) => {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(addPostData(json)))
      .then(() => dispatch(setLoading(false)))
      .then(() => dispatch(setFlag('post')))
  }
}

export default fetchOneRecipe