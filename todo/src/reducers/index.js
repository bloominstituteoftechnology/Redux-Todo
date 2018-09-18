const initialState = {
  todos: [
    {
      id: 1,
      value: "Learn at Lambda School",
      completed: false
    }
  ],
  input: ""
};
// created skeleton of reducer TODO: get some logic in here
export default (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_INPUT":
      return Object.assign({}, state, { input: action.payload });

    case "ADD_TODO":
      // handle empty input
      if (state.input === "") {
        return Object.assign({}, state, { todos: state.todos, input: "" });
      }

      // setup an id for the new todo
      const nextId = state.todos.length + 1;

      // set the next todo object up
      let nextTodo = { id: nextId, value: state.input, completed: false };
      // take a clice of the todos
      let addTodos = state.todos.slice()

      // push the next todo in to the addTodos
      addTodos.push(nextTodo);

      // update the store using object assign
      return Object.assign({}, state, { todos: addTodos, input: '' });
      
    default:
      return state;
  }
};
