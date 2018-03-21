import { combineReducers } from 'redux';
import todos from './todos';

const todoReducer = combineReducers({
  todos,
});

export default todoReducer;