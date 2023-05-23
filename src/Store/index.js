import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import thunk from 'redux-thunk';

import CategoriesReducer from "./Reducers/DepartmentReducer/CategoriesReducer";

const reducers = combineReducers({
  
    categories:CategoriesReducer,
  

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancer(applyMiddleware(thunk)));

export default store;
