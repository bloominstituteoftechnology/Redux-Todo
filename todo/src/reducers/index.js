import {NewTodoReducer} from './NewTodoReducer';
import {ListReducer} from './List_reducer';
import {CompletedReducer} from './CompletedReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    todoList: ListReducer,
    value: NewTodoReducer,
    completed: CompletedReducer
})


