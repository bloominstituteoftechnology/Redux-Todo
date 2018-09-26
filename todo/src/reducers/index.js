import { ADD_TODO, COMPLETE_TODO } from '../actions';

const initialState = {
  todos: [
    {
      id: 0,
      value: 'Walk the dog',
      complete: false
    }
  ],
};

export const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
    return Object.assign({}, state, {
      todos: [...state.todos, action.payload]
    });
    // return {...state, todos:[ ...state.todos, action.payload ]};
    case COMPLETE_TODO:
     return {
       ...state,
       todos: state.todos.map((todo, index) => {
         if (index === action.payload) {
           return {...todo, completed: !todo.completed}
         }
         else {
           return todo;
         }
       })
     };
    default:
      return state;
  };
}