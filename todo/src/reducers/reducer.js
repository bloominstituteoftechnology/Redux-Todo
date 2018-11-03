import { ADD_TODO } from "../actions/action";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todo: action.payload.task,
        completed: false
      });
    default:
      return state;
  }
};
