import { combineReducers } from 'redux';
import todosReducers from './reducers';

const rootReducer = combineReducers({
    todos: todosReducers
});

export default rootReducer;