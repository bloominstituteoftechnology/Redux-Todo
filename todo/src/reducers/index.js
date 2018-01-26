import { combineReducers } from 'redux';
import todosReducers from './todosReducers';

const rootReducer = combineReducers({
  todos: todosReducers
});

export default rootReducer; 