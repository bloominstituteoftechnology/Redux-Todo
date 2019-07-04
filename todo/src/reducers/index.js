import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';

export default combineReducers({
  userReducer,
  todoReducer,
});
