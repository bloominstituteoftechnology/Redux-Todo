import { combineReducers } from 'redux';
import { todoApp } from '../reducers/TodoReducer.js';

export const rootReducer = combineReducers({
    todos: todoApp,
});