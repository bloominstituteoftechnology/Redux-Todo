

export const initialState = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: false
    }
  ]
};

export function todosReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
};