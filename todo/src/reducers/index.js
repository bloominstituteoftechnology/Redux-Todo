import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state, // brings in what is already on state
        todos: [...state.todos, action.payload] //brings in what todos has on state, and then adds whatever the action payload is to todos
      };
    case TOGGLE_TODO:
      return {
        ...state, //returns what is already on state
        todos: state.todos.map((todo, index) => {
          //maps over the todos on state, for each todo it finds its index.
          if (index === action.payload) {
            //if the index matches the action payloads index
            return {
              ...todo, //return the list of todos
              completed: !todo.completed // set the completed of the matched index to true.
            };
          }
          return todo; // return the other todos as normal.
        })
      };
    default:
      return state;
  }
};
