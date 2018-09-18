const initialState = {
  todos: [
    {
      id: 1,
      value: 'Learn at Lambda School',
      completed: false
    }
  ],
  input: ''
}
// created skeleton of reducer TODO: get some logic in here
export default (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_INPUT':
      return Object.assign({}, state, { input: action.payload });

    case 'ADD_TODO':
      return state;
      // TODO: fill in logic this will be quite a hefty one
    default:
      return state;
  }
};