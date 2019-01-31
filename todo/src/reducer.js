import { ADD_TODO } from "./actions";

let defaultState = {
  title: "REDUX TODOS",
  todos: [
    {
      task: "Does it work?",
      complete: false
    }
  ]
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newTodos = [...state.todos, action.payload];
      return { ...state, todos: newTodos };
    default:
      return state;
  }
};
export default reducer;
