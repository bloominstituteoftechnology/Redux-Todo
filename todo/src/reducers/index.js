const initialState = {
  todos: [
    {
      value: "Todo test 1",
      completed: false,
      id: 1
    }
  ],
  newTodo: ""
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_TODO":
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          { value: action.payload, completed: false, id: Math.random() }
        ]
      });
    default:
      return state;
  }
};

export default todosReducer;
