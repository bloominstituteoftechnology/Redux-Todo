import { combineReducers } from 'redux';
import TodoReducer from './todos';
import ActiveTodo from './active-todo';

const rootReducer = combineReducers({
    todos: TodoReducer,
    activeTodo: ActiveTodo,
});

export default rootReducer;