import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from '../actions';

const initialState = {
  todos: [
    {
      id: 0,
      value: 'Do something',
      completed: false
    }
  ]
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          const id = action.payload;

          if (todo.id === id) {
            return { ...todo, completed: !todo.completed }
          } else {
            return todo;
          }
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          const id = action.payload;
          return todo.id !== id;
        })
      }
    default:
      return state;
  }
};

export default todoReducer;