import { combineReducers } from 'redux';
import { HANDLE_INPUT, ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from '../actions';

const initialState = {
  todos: [],
    todo: '',
}


export default (state = initialState, action) => {
  switch(action.type){
    case ADD_TODO:
      let newList = [
        ...state.todos,
          {
          id: Date.now(),
          value: action.payload,
          completed: false,
          }
      ]
      return {
        ...state,
        todos: newList,
        todo: '' };
    case HANDLE_INPUT:
      return {...state, todo: action.payload};

    case TOGGLE_COMPLETE:
    return state;


    case DELETE_TODO:
      let deletingList = state.todos.filter((item) => item.id !== action.payload);
      return {...state, todos: deletingList };
    default:
    return state;
  }
}
