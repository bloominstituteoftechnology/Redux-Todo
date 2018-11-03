import { ADD, DELETE } from '../actions';

const initialState = {
  todos: [];
}


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, {task: action.task, completed: false})
    case DELETE:
      return state;
    default:
      return state;
  }
};