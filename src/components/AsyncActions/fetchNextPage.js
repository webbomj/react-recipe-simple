import {fetchData, setFlag} from '../Store/RecipesReducer'

const fetchNextPage = (url) => {
  return function(dispatch) {
    dispatch(setFlag('preloader'))
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(fetchData(json)))
      .then(() => dispatch(setFlag('list')))
  }
}

export default fetchNextPage