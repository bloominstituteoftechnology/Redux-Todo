import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = [
  {
    text: "something for first item",
    completed: false,
    id: 0
  }
];

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      const clickId = action.payload;
      console.log("state comp", state[0].completed);
      console.log("action", action.payload);

      return state.map(ObjOfArr => {
        console.log(ObjOfArr.id);
        if (action.payload === ObjOfArr.id) {
          ObjOfArr.completed = !ObjOfArr.completed;
          return ObjOfArr;
        } else {
          return ObjOfArr;
        }
         
      });

    // const todos = state.todos.map(todo => {
    //   if (todo.id === id) {
    //     todo.completed = !todo.completed;
    //     return todo;
    //   } else {
    //     return todo;
    //   }
    // });
    // return Object.assign({}, state, { todos: todos });
    default:
      return state;
  }
};
