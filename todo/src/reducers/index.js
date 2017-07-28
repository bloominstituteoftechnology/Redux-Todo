import { combineReducers } from 'redux';
import todosReducer from './todos';
import selectedTodoReducer from './selectedTodoReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  selectedTodo: selectedTodoReducer
});

export default rootReducer;
