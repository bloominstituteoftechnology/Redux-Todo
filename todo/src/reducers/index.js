export const initialState = {
  todos: [
    {
      id: 0,
      value: "Understand Redux",
      completed: false
    }
  ]
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    //add actions
    case "ADD_TODO":
      console.log("add a todo");

    default:
      return state;
  }
}
