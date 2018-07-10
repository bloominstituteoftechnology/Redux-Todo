const initialState = {
  todos: [
    {
      value: "Todo test 1",
      completed: false,
      id: 1
    }
  ]
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_TODO":
      return Object.assign({}, state, {});
    default:
      return state;
  }
};

export default todosReducer;
