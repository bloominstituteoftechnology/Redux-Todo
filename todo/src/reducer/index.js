import { ADDTODO, SETCOMPLETED } from "../actions";

const initialState = {
  todos: [{
    todo:'',
    completed:false
  }]
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
            return { ...todos, completed: !todos.completed };
          } else {
            return todo;
          }
        })
      };
    //       case DELETE_TODO - Hint use index to find it, use filter to filter it out
    default:
      return state;
  }
};

export default titleReducer;
