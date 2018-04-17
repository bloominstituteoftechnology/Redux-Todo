import { combineReducers } from 'redux';

import todosReducer from './todos';
import addTodosReducer from './addTodosReducer';

export default combineReducers({
  todos: todosReducer, // the list of ToDos
  addTodos: addTodosReducer // the function of adding Todo items
})