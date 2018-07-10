import { ADD_TODO, TOGGLE_TODO } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
        return [...state, action.payload];
    case TOGGLE_TODO:
        return state.map(todo => {
            if (todo.id === action.payload.id) {
            return Object.assign({}, todo, { completed: !todo.completed});
            }
            return todo;
        });

    default:
      return state;
  }
};
