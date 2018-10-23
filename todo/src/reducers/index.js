import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

const initialState = {
  todos: [
    {todo: 'Make Breakfast', completed: false },
    {todo: 'Go Vote', completed: false }
  ]
};

const todosReducer = (state = initialState, action) => {
  console.log('todos reducer');
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { todo: action.payload, completed: false }]
      };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if(index === action.payload) {
            return {...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
}

export default todosReducer;