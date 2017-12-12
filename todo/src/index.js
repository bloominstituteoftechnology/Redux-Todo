import { combineReducers } from 'redux';
import todosReducers from './reducers/todosReducers';

const rootReducer = combineReducers({
  todos: todosReducers
});

export default rootReducer;