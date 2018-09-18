import { ADD_TODO, TOOGLE_COMPLETED } from '../actions';

export const initialState = {
  todos: [
    {
      id: 0,
      value: 'Walk the dog.',
      completed: false
    },
    {
      id: 1,
      value: 'Walk',
      completed: false
    }
  ]
}

export function todoReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {todos: [...state.todos,
        { 
          id: state.todos.length,  
          value: action.payload,
          completed: false,
        }
      ]}
    
    case TOOGLE_COMPLETED:
      const newTodos = state.todos.map(todo => {
        console.log()
        if(todo.id === action.payload) {
          return {
              ...todo, 
              completed: !todo.completed
            }
        } else {
          return {...todo};
        }
      })
      return {todos: newTodos};
      // console.log({newTodos});

    default:
      return state;
  }
}