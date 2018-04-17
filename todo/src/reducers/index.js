import {combineReducers} from 'redux';
import TodoItemReducer from './TodoItemsData';
import CurrentTodoItem from './rdTodoItem'
import  {ADD_TODO, REMOVE_TODO,GET_TODOS} from "../actions";


const rootReducer = combineReducers({
    todos: TodoItemReducer,
    currentTodoItem: CurrentTodoItem
});

export default rootReducer;