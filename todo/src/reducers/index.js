import { combineReducers } from 'redux';
import todosReducer from './todosReducer'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos: todosReducer,
  visibilityFilter

});

export default todoApp;
