import  { ADD_TODO } from './actions';
import  { TOGGLE_TODO } from './actions';

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
    default: 
      return state;
  }
}
