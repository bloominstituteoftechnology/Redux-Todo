import { combineReducers } from 'redux';
import TodoReducer from './todos'

const rootReducer = combineReducers({
    todos: TodoReducer
});

export default rootReducer;