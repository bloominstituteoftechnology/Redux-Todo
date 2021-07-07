import {combineReducers} from 'redux';
import todosReducer from './TodoReducer'; 

const rootReducer = combineReducers({
    todos: todosReducer
}); 

export default rootReducer; 