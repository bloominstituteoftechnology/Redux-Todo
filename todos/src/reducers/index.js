import {ADD_TODO, TOGGLE_COMPLETED} from "../actions";

const initialState = {todos: [{value: "study", completed: false}]};

const todoReducer = (state = initialState, action) => {
  console.log("REDUCER", state, action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {value: action.payload, completed: false}]
      };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            return {...todo, completed: !todo.completed};
          }
        })
      };
    default:
      return state;
  }
};

export default todoReducer;
