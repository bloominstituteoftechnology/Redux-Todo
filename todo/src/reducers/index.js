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
      return [...state, action.payload];
    case COMPLETE_TODO:
      let completeTodo = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
          return todo;
        }
        else {
          return todo;
        }
      })
      return {
        todos: completeTodo
      }
    default:
      return state;
  };
}