import { combineReducers } from 'redux'
import todos from './todo'
import visibilityFilter from './visibility'
​
export default combineReducers({
  todos,
  visibilityFilter
})
