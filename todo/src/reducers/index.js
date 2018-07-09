const initialState = {
  todos: [{ value: 'this is the first task', completed: false }],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // console.log('state in reducer', JSON.stringify(state));
      let arr = state.todos.slice();
      arr.push({ value: 'this is a new task', completed: false });
      return Object.assign({}, state, {
        todos: arr,
        // todos: state.todos.push([{ value: value, completed: false }]),
        //return Object.assign({}, state, { userLoggedIn: !state.userLoggedIn });
      });
    default:
      return state;
  }
};

export default todosReducer;
