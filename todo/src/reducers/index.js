import { GET_TODOS, ADD_TODO, COMPLETED_TODO } from "../actions/index";

const initialState = {
  todos: [
    {
      task: "Do this thing",
      completed: false
    }
  ]
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { task: action.payload, completed: false }]
      };

    case COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
};

export default todosReducer;
