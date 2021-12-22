import {fetchData, setLoading, setError} from '../Store/RecipesReducer';

const fetchRecipe = (query) => {
  return function(dispatch) {
    dispatch(setLoading(true));
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=9aa93e9c&app_key=98b8b38b27fcc09925f8d185765479ff&q=${query}`)
      .then(response => {
        if (response.status !== 200) {
          dispatch(setError(['error', `${response.status}`]));
        } else {
          return response.json();
        }     
      })
      .then(json => {
        if (json.count === 0) {
          dispatch(setError(['error', `404`]));
        } else {
          dispatch(fetchData(json))
        }
        
      })
      .then(() => dispatch(setLoading(false)))
      .catch((e) => {
        dispatch(setError(['error', `${e}`]));
        dispatch(setLoading(false));
      })
  }
}

export default fetchRecipe;