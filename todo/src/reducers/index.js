import { combineReducers } from 'redux'
import todos from './todoReducer';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
    todos,
    visibilityFilter
})