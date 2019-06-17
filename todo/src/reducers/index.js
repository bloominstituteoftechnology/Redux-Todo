import { combineReducers } from 'redux'
import todos from './todoReducer';
import visibilityFilter from './visibilityFilter';
import { reducer as formReducer } from 'redux-form'
export default combineReducers({
    todos,
    visibilityFilter,
    form: formReducer
})