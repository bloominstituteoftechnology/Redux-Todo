import { combineReducers } from 'redux';
import todos from './todos';
import CompletedFilters from './completedfilters';

export default combineReducers({
    todos,
    CompletedFilters
});