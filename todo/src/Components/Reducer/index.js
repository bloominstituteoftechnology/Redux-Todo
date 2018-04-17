import { combineReducers } from 'redux';
import todos from './Reducer';
import CompletedFilters from './Reducer';

export default combineReducers({
    todos: todo,
    CompletedFilters: CompletedFilters
});