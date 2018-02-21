import { combineReducers } from 'redux';
import ToDosReducer from './todos';
import AddToDo from './add-todo'

const rootReducer = combineReducers({
  todos: ToDosReducer,
  addTodo: AddToDo,
});

export default rootReducer;