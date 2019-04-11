export const ADD = "ADD";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE = "DELETE";

const initialState = {
  todos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      };
    case TOGGLE_COMPLETED:
      const newTodos = state.todos.map((todo, index) => {
        console.log(action.payload, index);
        if (index === action.payload) {
          return { value: todo.value, completed: !todo.completed };
        }
        return todo;
      });
      return {
        ...state,
        todos: newTodos
      };
    case DELETE:
      const filteredToDO = state.todos
        .slice(0, action.payload)
        .concat(state.todos.slice(action.payload + 1));
      console.log(filteredToDO, action.payload);
      return {
        ...state,
        todos: filteredToDO
      };
    default:
      return { ...state };
  }
};
