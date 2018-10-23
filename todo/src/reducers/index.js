import { ADDTODO, SETCOMPLETED, DELETETODO } from "../actions";

const initialState = {
  todos: [
    { todo: "test1", completed: false },
    { todo: "test2", completed: false }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todos: [...state.todos, { todo: action.payload, completed: false }]
      };
    case SETCOMPLETED:
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
    // case DELETETODO:
    //   return {
    //     ...state,
    //     todos: state.todos.filter(() => {
    //       return { ...(todo.completed = true) };
    //     })
    //   };
    //       case DELETE_TODO - Hint use index to find it, use filter to filter it out
    default:
      return state;
  }
};

export default todoReducer;
