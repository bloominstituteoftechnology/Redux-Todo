import { combineReducers } from 'redux';
import { taskReducer as todoList } from './taskReducer';

export default combineReducers({
  todoList
});