import { ADD_TODO } from "./actions";
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
      action.payload.id = state.todos[state.todos.length - 1].id + 1;
      let newTodos = [...state.todos, action.payload];
      return { ...state, todos: newTodos };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload;
        })
      };
    default:
      return state;
  }
};
export default reducer;
