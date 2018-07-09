const initialState = {
  todos: [
    {
      body: "Todo test 1",
      completed: false,
      id: 1
    }
  ]
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todosReducer;
