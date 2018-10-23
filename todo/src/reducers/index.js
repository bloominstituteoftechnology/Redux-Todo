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
          // id: Date.now(),
          value: action.payload,
          completed: false,
          }
      ]
      return {
        ...state,
        todos: newList,
        todo: '' };

//update the store's todo field on change in input form;
    case HANDLE_INPUT:
      return {...state, todo: action.payload};

//toggleComplete does not work!
    case TOGGLE_COMPLETE:
    let completedList = state.todos.map((item, index) => (index === action.payload) ? {...item, completed: !item.completed} : item);
    return {
      ...state,
      todos: completedList
    }


    case DELETE_TODO:
//filter the list of todos on state so that only those that do not match the ID that was passed by the action remain
      let deletingList = state.todos.filter((item, index) =>
       index !== action.payload);
      return {...state, todos: deletingList };
    default:
    return state;
  }
}
