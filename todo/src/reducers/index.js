import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

const initialState = {
  todos: [
    {todoText: 'Make Breakfast', completed: false, index: 1 },
    {todoText: 'Go Vote', completed: false, index: 2 }
  ]
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { todoText: action.payload, completed: false }]
      };
    case TOGGLE_COMPLETED:
      console.log('TOGGLE_COMPLETED REDUCER')
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