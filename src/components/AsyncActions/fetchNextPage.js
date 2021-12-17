import {fetchData, setFlag, setLoading} from '../Store/RecipesReducer'

const fetchNextPage = (url) => {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(fetchData(json)))
      .then(() => dispatch(setLoading(false)))
      .then(() => dispatch(setFlag('list')))
  }
}

export default fetchNextPage