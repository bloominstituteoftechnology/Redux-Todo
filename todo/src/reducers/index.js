import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actionTypes';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || []
};

const emptyTodo = { todo: '', id: -1, complete: false };

const setTodosLocalStorage = todoArray => {
  localStorage.setItem('todos', JSON.stringify(todoArray));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newTodos = [
        ...state.todos,
        { todo: action.newTodo, id: Date.now(), complete: false }
      ];
      setTodosLocalStorage(newTodos);
      return {
        ...state,
        todos: newTodos
      };
    case TOGGLE_TODO:
      let toggledList = state.todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        }
        return todo;
      });
      setTodosLocalStorage(toggledList);
      return {
        ...state,
        todos: toggledList
      };
    case DELETE_TODO:
      let deletedList = state.todos.map(todo => {
        if (todo.id === action.id) return emptyTodo;
        return todo;
      });
      setTodosLocalStorage(deletedList);
      return {
        ...state,
        todos: deletedList
      };

    default:
      return state;
  }
};

export default reducer;
