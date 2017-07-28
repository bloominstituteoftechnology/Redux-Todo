import { combineReducers } from 'redux';
import todosReducer from './todosReducer'


const todoApp = combineReducers({
  listItems: todosReducer,

});

export default todoApp;
