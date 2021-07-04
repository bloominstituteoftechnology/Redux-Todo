import {combineReducers} from 'redux';
import todoReducer from './todoReducer';

export const mainReducer = combineReducers({
    todos: todoReducer
});
