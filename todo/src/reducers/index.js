import { ADD_TODO, TOGGLE_COMPLETE } from "../actions";

const initialState = {
  todoList: []
};

function reducer(state = initialState, action) {
  console.log("reducer", action.type, action.payload);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };

    case TOGGLE_COMPLETE:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          console.log(todo.newTodo.id === action.payload);
          if (todo.newTodo.id === action.payload) {
            return {
              ...todo.newTodo,
              completed: !todo.newTodo.completed
            };
          }
          console.log(todo);
        })
      };
    default:
      return state;
  }
}

export default reducer;
