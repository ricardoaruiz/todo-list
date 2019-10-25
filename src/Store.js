import { applyMiddleware, createStore, combineReducers } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

// Reducers
import todoReducer from './reducers/todoReducer';

// Combine reducers
const reducers = combineReducers({
    todo: todoReducer
});

// Redux Devtools extension for Google Chrome setup (optional)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// Create Store with combined reducers and promise middleware
export default applyMiddleware(promise, thunk, multi)(createStore)(reducers, devTools);