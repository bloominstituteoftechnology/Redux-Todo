import { combineReducers } from 'redux';
import todosReducer from './todos';

const rootReducer = combineReducers({
    todos: rootReducer
});

export default rootReducer;