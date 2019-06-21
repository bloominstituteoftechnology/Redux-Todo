import { combineReducers } from 'redux';
import todosReducer from './reducerTodos';

const rootReducer = combineReducers({
    todos:todosReducer
});

export default rootReducer;