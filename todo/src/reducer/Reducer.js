//import actions
import { ADD_TODO, DELETE_TODO } from '../actions/Action';

//set initial state
const initialState = { todoList: [] };

//create reducer
export default (state = initialState, action) => {
  //   console.log(state, action);
  switch (action.type) {
    case ADD_TODO:
      //   console.log(state.todoList, action.payload);
      //   console.log({ todoList: [...state.todoList, action.payload] });
      return { todoList: [...state.todoList, action.payload] };
    case DELETE_TODO:
      return {};
    default:
      return state;
  }
};
