import { ADD_TODO } from "./actions";
import { STRIKE_TODO } from "./actions";
import { DELETE_TODO } from "./actions";

let defaultState = {
  title: "REDUX TODOS",
  todos: [
    {
      task: "Does it work?",
      complete: false,
      id: 0
    }
  ]
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      if (action.payload) {
        action.payload.id = state.todos[state.todos.length - 1].id + 1;
        let newTodos = [...state.todos, action.payload];
        return { ...state, todos: newTodos };
      } else {
        return { ...state };
      }
    case STRIKE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              task: todo.task,
              complete: !todo.complete,
              id: todo.id
            };
          } else return todo;
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.complete !== true)
      };
    default:
      return state;
  }
};
export default reducer;
