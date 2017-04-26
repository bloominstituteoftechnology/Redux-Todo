import { combineReducers } from 'redux';
import TodosReducer from './todos';

const rootReducer = combineReducers({
  todos: TodosReducer
});

export default rootReducer;