import { combineReducers } from 'redux';
import TodoReducer from './todos';

const reducers = combineReducers({
    todos: TodoReducer
})

export default reducers;