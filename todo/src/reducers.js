import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actions.js';

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
    case TOGGLE_TODO:
      return state.map(each => {
        if (action.id === each.id) {
          each.completed = !each.completed;
          return each;
        } else return each;
      })
    case DELETE_TODO:
      return state.filter(each => {
        if (action.id !== each.id) return each;
      })
    default:
      return state;
  }
}

export default todos