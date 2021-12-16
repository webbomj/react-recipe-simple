import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import RecipesReducer from './RecipesReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const allReducers = combineReducers({
  data: RecipesReducer,
  
})

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;