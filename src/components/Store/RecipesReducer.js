export const FETCH = 'FETCH';
export const ADD_QUERY = 'ADD_QUERY';
export const ADD_POSTDATA = 'ADD_POSTDATA';
export const SET_FLAG = 'SET_FLAG';

const initialState = {
  data: {},
  query: 'chicken',
  post: {},
  flag: 'preloader',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {...state, data: {...action.payload}}
    case ADD_QUERY:
      return  {...state, query: `${action.payload}`}
    case ADD_POSTDATA:
      return {...state, post: {...action.payload}}
    case SET_FLAG:
      return {...state, flag: action.payload}
    default:
      return state
  }
};

export const fetchData = (payload) => ( {type: FETCH, payload} )
export const addQuerry = (payload) => ( {type: ADD_QUERY, payload} )
export const addPostData = (payload) => ( {type: ADD_POSTDATA, payload} )
export const setFlag = (payload) => ( {type: SET_FLAG, payload} )

export default reducer;

