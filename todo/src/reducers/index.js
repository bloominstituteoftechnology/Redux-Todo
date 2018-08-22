import { ADD_TODO, DELETE_TODO } from "../actions";

const initialState = {
  todos: [
    {
      value: "Walk the dog.",
      completed: false
    },
    {
      value: "test",
      completed: false
    }
  ]
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TODO:
    //   return {...state, todos: [payload]};
    const states = {...state}
    const todo = payload 
    console.log(todo)
    states.todos.push(todo)
    console.log(states)
    // case DELETE_TODO:
    //   return {
    //     ...state,
    //     value: action.deleteTodo
    //   };
    default:
      return state;
  }
};
