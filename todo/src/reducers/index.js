export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const CLEAR_TODO = "CLEAR_TODO";

const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { task: action.payload, complete: false, id: Date.now() }
        ]
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        })
      };
    case CLEAR_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.complete === false)]
      };
    default:
      return state;
  }
};

export default reducer;
