const initialState = {
  todos: [{ value: 'this is the first task', completed: false }],
  input: '',
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('state in reducer', JSON.stringify(state));
      let arr = state.todos.slice();
      arr.push({ value: state.input, completed: false });
      return Object.assign({}, state, {
        todos: arr,
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
