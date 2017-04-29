import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [
        // break out the individual objects that are currently in the state array
        ...state,
        // add new todo to the end of the array
        {
          id: state.length,
          value: payload.value,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === payload.id) { 
          todo.completed = !todo.completed; 
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter(todo => todo.id !== payload.id);
    default: 
      return state;
  }
};