/* index reducer*/
import { combineReducers } from 'redux';
import TodosReducer from './todos';
import ActiveTodo from './active-todo';

const rootReducer = combineReducers({
    todos: TodosReducer,
    activeTodo: ActiveTodo,
});

export default rootReducer;