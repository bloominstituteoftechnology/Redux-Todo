import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions';

const initialState = {
  todos: [],
  visibilityFilter: VisibilityFilters.SHOW_ALL
}

const todoApp = (state = initialState, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, { visibilityFilter: action.filter })
    case ADD_TODO:
      console.log(Object.assign({}, state, { todos: [ ...state.todos, { text: action.text, completed: false }]}));   
      return Object.assign({}, state, { todos: [ ...state.todos, { text: action.text, completed: false }]})
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, { 
              completed: !todo.completed 
            })
          }
          return todo
        })
      })
    default:
      return state
  }
}

export default todoApp;