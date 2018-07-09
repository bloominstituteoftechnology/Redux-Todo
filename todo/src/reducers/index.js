const initialState = {
  todos: [{ value: 'this is the first task', completed: false }],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: state.todos.push([
          { value: 'this is a new task', completed: false },
        ]),
        // todos: state.todos.push([{ value: value, completed: false }]),
      });
    default:
      return state;
  }
};

export default todosReducer;
