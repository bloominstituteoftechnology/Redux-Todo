//import actions
import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODOS } from '../actions/Action';

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
    case TOGGLE_COMPLETE:
      console.log(state, action);
      return {
        todoList: state.todoList.map(item => {
          if (item.id === action.payload) {
            console.log(item);
            return Object.assign({}, item, { completed: !item.completed });
          }
          return item;
        })
      };
    case DELETE_TODOS:
      return {
        todoList: state.todoList.filter(item => {
          return !item.completed;
        })
      };
    default:
      return state;
  }
};
