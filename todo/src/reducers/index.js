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

    case "TOGGLE_COMPLETED":
      let tmpId = action.payload;
      let tmpTodos = state.todos;
      let todo = tmpTodos.find(todo => todo.id === tmpId);

      console.log(todo.value + " has been completed");
      console.log(todo.completed);
      todo.completed = !todo.completed;

      //returning state object with modified completed property.. is this fine?
      return { ...state, todos: tmpTodos };

    case "ADD_TODO":
      console.log("add a todo");
      let id = state.todos.length + 1;
      let newTodo = {
        id: id,
        value: action.payload,
        completed: false
      };
      let newList = [...state.todos, newTodo];
      state.todos.push(newTodo);

      return { ...state, todos: newList, inputText: "" };

    case "HANDLE_CHANGE":
      return { ...state, inputText: action.payload };

    default:
      return state;
  }
}
