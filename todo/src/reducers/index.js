import { combineReducers } from 'redux';
import todosReducer from './todoReducers';

const rootReducer = combineReducers ({
    todos: todosReducer
});

export default rootReducer;