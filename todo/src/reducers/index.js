import {combineReducers } from 'redux';
import todos from './todos'
import visibilityFilter from './setvisibleFilter'
//consolodate all reducer functions into one
const todoApp = combineReducers({
    todos,
    setvisibleFilter
  })
  

  
  export default todoApp
