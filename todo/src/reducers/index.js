import {
    HANDLE_INPUT,
    ADD_TODO,
    TOGGLE_COMPLETE,
    DELETE_TODO
  } from "../actions";
  
  const initialState = {
    todos: localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [],
    todo: ""
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case HANDLE_INPUT:
        return { ...state, todo: action.payload };
      case ADD_TODO:
        let newTodos = [
          ...state.todos,
          { value: action.payload, completed: false }
        ];
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return {
          ...state,
          todos: newTodos,
          todo: ""
        };
      case TOGGLE_COMPLETE:
        console.log("reducer toggled");
        let completedTodos = state.todos.slice();
        completedTodos.splice(action.id, 1, {
          value: action.value,
          completed: !action.payload
        });
        return { ...state, todos: newTodos };
      case DELETE_TODO:
        let deleteTodos = state.todos
          .slice()
          .filter((todo, i) => i !== action.payload);
        localStorage.setItem("todos", JSON.stringify(deleteTodos));
        return { ...state, todos: deleteTodos };
      default:
        return state;
    }
  };