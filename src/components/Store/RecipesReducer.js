export const FETCH = 'FETCH';
export const ADD_QUERY = 'ADD_QUERY';
export const ADD_POSTDATA = 'ADD_POSTDATA';
export const SET_POSTID = 'SET_POSTID';
export const SET_LOADING = 'SET_LOADING';
export const REPLACE_QUANTITY = 'REPLACE_QUANTITY';

const initialState = {
  data: {},
  query: 'chicken',
  loading: false,
  post: {},
  postId: '',

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {...state, data: {...action.payload}}
    case ADD_QUERY:
      return  {...state, query: `${action.payload}`}
    case ADD_POSTDATA:
      return {...state, post: {...action.payload}}
    case SET_POSTID:
      return {...state, postId: action.payload}
    case SET_LOADING:
      return {...state, loading: action.payload}
    default:
      return state
  }
};

export const fetchData = (payload) => ( {type: FETCH, payload} )
export const addQuerry = (payload) => ( {type: ADD_QUERY, payload} )
export const addPostData = (payload) => ( {type: ADD_POSTDATA, payload} )
export const setPostId = (payload) => ( {type: SET_POSTID, payload} )
export const setLoading = (payload) => ( {type: SET_LOADING, payload} )

export default reducer;

