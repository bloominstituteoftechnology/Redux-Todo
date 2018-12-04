export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";

const initialState = {
  todos: [
    {
      id: 1,
      value: "Add my wishlist items for Secret Santa",
      completed: false
    },
    {
      id: 2,
      value: "Buy my Secret Santa their gift",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            value: action.payload,
            completed: false
          }
        ]
      };
    case TOGGLE_COMPLETE:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else return todo;
        })
      };

    case REMOVE_COMPLETED:
      return {
        todos: state.todos.filter(todo => !todo.completed)
      };

    default:
      return state;
  }
};
