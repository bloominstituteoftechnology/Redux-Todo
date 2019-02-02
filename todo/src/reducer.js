import  { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_COMPLETED } from './actions';

let initialState = {
  todos: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: 
      return {todos: [...state.todos, action.newTodo]}

    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo => { return todo.id === action.id ? {...todo, completed: !todo.completed} : todo })
      }
    case DELETE_TODO:
      return {
        todos: state.todos.filter( todo => todo.id !== action.id )
      }
    case CLEAR_COMPLETED:
      return {
        todos: state.todos.filter( todo => {return todo.completed === false} )
      }
    default: 
      return state;
  }
}
