// index.js in reducers just aggregates them into one file
// i guess its easier to export them as one whole
// exports to the index.js in src (the main file) to connect reducers to the store

// import combineReducers function from redux library
import { combineReducers } from 'redux'
// import todo recuder
import todos from './todos'
// import visibilityFilter filter
import visibilityFilter from './visibilityFilter'

// aggregate the reducers into one variable
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

// export the combineRedcuers instance
// where?
// the index.js (main) consumes this in its store() function
// so it connects the store to the reducers
export default todoApp