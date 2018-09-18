initialState = {todos: [
    {
        value: 'Walk the dog.',
        completed: false
    }
]};

export function todosReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO:
        return { ...state.todos, {value: action.payload.value, completed: action.payload.completed} };
      default:
        return state;
    }
  }
