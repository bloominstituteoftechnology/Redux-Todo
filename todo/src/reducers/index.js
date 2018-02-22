import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  DELETE_TODO
} from '../actions/';
//Here we destructure VF to get access to all views
const { SHOW_ALL } = VisibilityFilters
 
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
 
let id = 0;
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      id++
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: id
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
      case DELETE_TODO:
          return state.filter(todo => todo.id !== action.id);
    default:
      return state
  }
}
 
const todoApp = combineReducers({
  visibilityFilter,
  todos
})
 
export default todoApp