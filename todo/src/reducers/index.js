import { combineReducers } from 'redux';
import todoReducer from './TodoReducer';

const reducers = combineReducers({
    todos: todoReducer
})

export default reducers;