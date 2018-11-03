import {combineReducers} from 'redux';
import todoReducer from './todoReducer';

export const topTodoReducer = combineReducers({
  todos: todoReducer
});