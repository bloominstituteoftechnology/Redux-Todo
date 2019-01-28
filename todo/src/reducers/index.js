const initialState = {
  todos: [
    {
      value: "Walk dog",
      completed: true
    }
  ]
};

export const rootReducer = (state = initialState, action) => {
  return {
    ...state
  };
};
