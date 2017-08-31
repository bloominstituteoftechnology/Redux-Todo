import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos: todosReducer,
  visibilityFilter
  // same as:
  // visibilityFilter: visibilityFilter
});

export default todoApp;
