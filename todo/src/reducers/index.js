import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './VisibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})
