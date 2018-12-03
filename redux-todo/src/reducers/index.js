export const ADD = 'ADD';

const initialState = {

  todos: [{value: 'abcdefg', completed: false}]

};

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD:
      console.log("ADDING", action.payload);
      return {todos: [...state.todos, action.payload]}
    default:
      return state;
  }
};
