import { combineReducers } form 'redux';
import todosReducer from './todos';

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducers;
