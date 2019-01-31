import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todos: [
      {
      todo: 'Walk the dog',
      completed: false
      }
  ]
};

const rootReducer  = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    const newTodo = { todo: action.payload, completed: false}
     //if the passed in action has type "ADD_TODO" execute this code
    return{
      ...state, todos:[...state.todos, newTodo]
    }


    case TOGGLE_TODO:
    return {
      ...state, todos: state.todos.map(todo => action.payload === todo.todo ? {...todo, completed: !todo.completed} : todo)
         }

    //Otherwise, this state
   
    default:
    return state;
  }
}
export default rootReducer;
