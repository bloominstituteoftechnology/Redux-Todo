import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer'
// import addTodoItem from './addTodoItem'

const rootReducer = combineReducers({
  todoList: todoListReducer,
  // addTodoItem: addTodoItem
});

export default rootReducer;
