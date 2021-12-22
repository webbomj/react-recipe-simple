import {fetchData, setLoading, setError} from '../Store/RecipesReducer';

const fetchNextPage = (url) => {
  return function(dispatch) {
    dispatch(setLoading(true));
    fetch(url)
      .then(response =>  {
        if (response.status !== 200) {
          dispatch(setError(['error', `${response.status}`]));
        } else {
          return response.json();
        }       
      })
      .then(json => dispatch(fetchData(json)))
      .then(() => dispatch(setLoading(false)))
      .catch((e) => {
        dispatch(setError(['error', `${e}`]));
        dispatch(setLoading(false));
      })
  }
}

export default fetchNextPage;