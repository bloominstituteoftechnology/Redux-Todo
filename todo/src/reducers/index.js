const initialState = {
  todos: [{ value: 'this is the first task', completed: false }],
  input: '',
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let arrTodo = state.todos.slice();
      arrTodo.push({ value: action.payload, completed: false });
      return Object.assign({}, state, {
        todos: arrTodo,
        input: '',
      });

    case 'MARK_DONE':
      console.log('marked done reducer state', state);
      return state;

    case 'HANDLE_INPUT':
      console.log('input', state.input);
      return Object.assign({}, state, {
        input: action.payload,
      });

    default:
      return state;
  }
};

export default todosReducer;
