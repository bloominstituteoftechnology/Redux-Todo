import { NEW_TODO, TOGGLE_COMPLETE } from "../actions";

//creating initial state
const initialState = {
  todos: [
    {
      value: "Walk the dog.",
      completed: false
    },
    {
      value: "Buy Milk.",
      completed: false
    }
  ]
};

function reducer(state = initialState, action) {
  console.log("reducer state:", state);
  switch (action.type) {
    //Creating new todo
    case NEW_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            value: action.payload,
            completed: false
          }
        ]
      });
    case TOGGLE_COMPLETE:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          //   console.log("clicked:", action.payload)
          return todo;
        })
      });
    default:
      //   console.log("state:", state);
      return state;
  }
}

export default reducer;
