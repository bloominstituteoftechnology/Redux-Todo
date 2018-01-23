import { combineReducers } from 'redux'
import todosReducer from './todos'

const reducers = combineReducers({
  todos: TodoReducer
})

export default reducers;