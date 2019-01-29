import { ADD_TODO, TOGGLE_COMPLETED } from "../actions/";

const initialState = {
  todos: [
    {
      value: "Walk dog",
      completed: true
    }
  ]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { value: action.payload.value, completed: false }
        ]
      };
    case TOGGLE_COMPLETED:
      console.log(action.payload.value);
      const todos = state.todos.map(todo => {
        if (todo.value === action.payload.value) {
          todo = { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        todos: [...todos]
      };
    default:
      return state;
  }
};

// const mappedEvents = events.map(e => {
//   if (e.name === 'Event 2') {
//     e = { ...e, name: 'Second Event' };
//     e.metadata = {...e.metadata, type: 'closed'};
//   }
//   return e;
// });
