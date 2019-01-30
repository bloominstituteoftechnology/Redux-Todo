import { ADD_TODO } from "../components/actions";

const initialState = {
  todos: [
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
     //if the passed in action has type "ADD_TODO" execute this code
    return{
      ...state, todos:[...state.todos, action.payload]
    }
    //Otherwise, this state
    default:
    return state;
  }
}
export default reducer;
