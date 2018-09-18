import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

const initialState = {
  todos: [
    {
      id: 0,
      completed: false,
      text: 'Walk the dog'
    }
  ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload],
      })
      case TOGGLE_COMPLETE:
      const todoArray = id => {

       this.state.todos.map( todo => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
          return {
            todoArray
          }
        })
        }
    default:
    return state;
  }
}
