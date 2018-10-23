import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

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
        // todos: [...state.todos, { completed: !action.completed }]
        todos: state.todos.map(todo => {
          const id = action.payload;

          if (todo.id === id) {
            return [...state.todos, { ...todo, completed: !action.completed }]
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
};

export default todoReducer;
