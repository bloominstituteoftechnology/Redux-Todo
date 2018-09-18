export const initialState = {
  todos: [
    {
      id: 0,
      value: "Understand Redux",
      completed: false
    }
  ],
  inputText: ""
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    //add actions
    case "ADD_TODO":
      console.log("add a todo");
      let newTodo = {
        id: 1,
        value: action.payload,
        completed: false
      };
      let newList = [...state.todos, newTodo];
      state.todos.push(newTodo);

      return { ...state, todos: newList, inputText: "" };

    case "HANDLE_CHANGE":
      console.log("reducer fired - " + action.payload);
      return { ...state, inputText: action.payload };
    default:
      return state;
  }
}
