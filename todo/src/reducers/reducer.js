import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';


export const reducer = (state = [], action) => {
  switch(action.type) {

    case ADD_TODO:
      return [...state, action.payload];

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (action.payload === todo.id) {
          todo.complete = !todo.complete;
          return todo;
        } else {return todo}
      })

    default:
      return state;

  }
}
