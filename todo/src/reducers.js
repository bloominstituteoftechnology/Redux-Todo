import { ADD_TODO } from './actions.js';

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.todoText,
          completed: false,
        }
      ];
    default:
      return state;
  }
}

export default todos