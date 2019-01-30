import { ADD_TODO, TOGGLE_COMPLETE } from "../actions";

const initialState = {
  todoList: []
};

function reducer(state = initialState, action) {
  console.log("reducer", action.type);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };

    case TOGGLE_COMPLETE:
      return {
        ...state,
        todoList: state.todoList.map((todo, index) => {
          if (index === action.payload) {
            return {
              ...todo,
              complete: !todo.complete
            };
          }
          return todo;
        })
      };
    default:
      return state;
  }
}

export default reducer;
