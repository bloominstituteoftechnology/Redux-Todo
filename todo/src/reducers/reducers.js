import { ADD_TODO, COMPLETED, DELETE_TODO } from '../actions/actions';

const initialState = {
  todo: []
};

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_TODO:
      return {todo: [...state.todo, action.payload]}
    case COMPLETED:
      return {todo: state.todo.map(item => item.id === action.payload ? { ...item, completed: !item.completed } : item)}
    case DELETE_TODO:
      return {todo: state.todo.filter(item => item.id !== action.payload)}
    default:
      return state;
  };
};
