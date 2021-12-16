import {fetchData} from '../Store/RecipesReducer'

const fetchNextPage = (url) => {
  return function(dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(fetchData(json)))
  }
}

export default fetchNextPage