import { combineReducers } from 'redux';
import todoReducer from './todos';

const rootReducer = combineReducers({
  todos: todoReducer
});

export default rootReducer;