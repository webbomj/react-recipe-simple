import {fetchData} from '../Store/RecipesReducer'

const fetchRecipe = (query) => {
  return function(dispatch) {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=9aa93e9c&app_key=98b8b38b27fcc09925f8d185765479ff&q=${query}`)
      .then(response => response.json())
      .then(json => dispatch(fetchData(json)))
  }
}

export default fetchRecipe