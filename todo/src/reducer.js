import  { ADD_TODO } from './actions';
import  { TOGGLE_TODO } from './actions';

let initialState = {
  todos: [
    {
    value: 'Walk the dog.',
    completed: false
    }
  ]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: 
      return {todos: [...state.todos, action.newTodo]}

    case TOGGLE_TODO:
      const todos = [...state]
      const toggledTodo = todos.find(todo => todo.id === action.id) 
      if (toggledTodo.completed === true) {
        toggledTodo.completed = false;
      } else {
        toggledTodo.completed = true;
      }

    default: 
      return state;
  }
}
