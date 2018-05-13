import { 
  ADD,
  HANDLE_CHANGE
} from '../actions';

export default (state = {input : '', todos : []}, action) => {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, {
        input: '',
        todos: [...state.todos, action.todo]
      });
    case HANDLE_CHANGE:
      return Object.assign({}, state, {
        input: action.input
      })
    default:
      return state
  }
};
