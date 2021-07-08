import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

const initialState = {
  todos: [
    {
    task: 'here is a todo',
    completed: false
    }
  ]
}

const todoReducer = (state = initialState, action) => {
  switch (action.type)
 {
   
   case ADD_TODO:
    return {
      ...state,
      todos: [...state.todos, {task: action.payload, completed: false}]
    };
   case TOGGLE_COMPLETE:
    return {
      ...state,
      todos: state.todos.map((todo, index) => 
         (index === action.payload ? { ...todo, completed: !todo.completed } : todo)
        
      )
    } 
   default: 
    return state;
 };
}

export default todoReducer;