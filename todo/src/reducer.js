import  { ADD_TODO } from './actions';

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
    default: 
      return state;
  }
}
