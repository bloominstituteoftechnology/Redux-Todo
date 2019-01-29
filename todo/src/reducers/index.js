const initialState = {
  todos: [
    { todo: 'workout', completed: false },
    { todo: 'do laundry', completed: true },
    { todo: 'work on car', completed: false },
  ]
}

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch(action.type) {
    default:
    return state;
  }
  
}

export default reducer;