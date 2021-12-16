import {addPostData} from '../Store/RecipesReducer'

const fetchOneRecipe = (url) => {
  return function(dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(addPostData(json)))
  }
}

export default fetchOneRecipe