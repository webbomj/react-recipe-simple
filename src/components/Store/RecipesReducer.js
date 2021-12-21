export const FETCH = 'FETCH';
export const ADD_QUERY = 'ADD_QUERY';
export const ADD_POSTDATA = 'ADD_POSTDATA';
export const SET_POSTID = 'SET_POSTID';
export const SET_LOADING = 'SET_LOADING';
export const REPLACE_QUANTITY = 'REPLACE_QUANTITY';
export const SET_MODAL = 'SET_MODAL';
export const SET_FAVORITES = 'SET_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';
export const LOCAL_STORE_ITEMS = 'LOCAL_STORE_ITEMS';

const initialState = {
  data: {},
  query: 'cake',
  loading: false,
  post: {},
  postId: '',
  isModal: false,
  favorites: [],
  localStoreItems: 0,

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
    case SET_MODAL:
      return {...state, isModal: action.payload}
    case SET_FAVORITES:
      return {...state, favorites: action.payload}
    case REMOVE_FAVORITES:
      return {...state, favorites: [...state.favorites.filter(el => el !== action.payload[0])]}
    case LOCAL_STORE_ITEMS:
      return {...state, localStoreItems: action.payload}
    default:
      return state
  }
};

export const fetchData = (payload) => ( {type: FETCH, payload} )
export const addQuerry = (payload) => ( {type: ADD_QUERY, payload} )
export const addPostData = (payload) => ( {type: ADD_POSTDATA, payload} )
export const setPostId = (payload) => ( {type: SET_POSTID, payload} )
export const setLoading = (payload) => ( {type: SET_LOADING, payload} )
export const setModal = (payload) => ( {type: SET_MODAL, payload} )
export const setFavorite = (payload) => ( {type: SET_FAVORITES, payload} )
export const removeFavorite = (payload) => ( {type: REMOVE_FAVORITES, payload} )
export const localStorageItems = (payload) => ( {type: LOCAL_STORE_ITEMS, payload} )

export default reducer;

