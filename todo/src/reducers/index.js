import { GET_TODOS, ADD_TODO, COMPLETED_TODO } from '../actions';

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
   case GET_TODOS:
   return {
     ...state

   }
   case ADD_TODO:
   return {
     ...state,
     todos: [...state.todos, {task: action.payload, completed: false}]
   };
   default: 
    return state;
 };
}

export default todoReducer;