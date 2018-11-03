//import actions
import { ADD_TODO } from '../actions/Action';

//set initial state
const initialState = { todoList: [] };

//create reducer
export default (state = initialState, action) => {
  //   console.log(state, action);
  switch (action.type) {
    case ADD_TODO:
      return { todoList: [...state.todoList, action.payload] };
    default:
      return state;
  }
};
