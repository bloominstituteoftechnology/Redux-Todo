import { combineReducers } from 'redux';
import ToDosReducer from './todos';
import AddToDo from './add-todo'

const rootReducer = combineReducers({
  todos: ToDosReducer,
  addToDo: AddToDo,
});

export default rootReducer;