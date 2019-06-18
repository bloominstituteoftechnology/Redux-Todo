import { combineReducers } from 'redux';
import { titleReducer as title } from './titleReducer';
import { taskReducer as taskList } from './taskReducer';

export default combineReducers({
  title,
  taskList
});