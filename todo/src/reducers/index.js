import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todos: [
    {
      value: "Create todo app",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO: {
      return {
        todos: [...state.todos, { value: action.text, completed: false }]
      };
    }
    case TOGGLE_TODO: {
      const newTodos = state.todos.map((todo, index) => {
        console.log(index, action.id);
        if (Number(action.id) === index) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      console.log(newTodos);
      return {
        todos: newTodos
      };
    }
    default:
      return state;
  }
};
