

export const initialState = {
  todos: [
    {
      value: 'walk the dog', // will change this later
      completed: false
    }
  ]  
};

export function todoReducer(state = initialState, action) {
  switch(action.type) {

    

    default:
      return state;
  }
}