const initialState = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: false,
      id: 0,
    },
  ],
};

export function reducer(state = initialState, action) {
  console.log('in reducer: ');
  switch (action.type) {
    default:
      return state;
  }
}
