import { ADDITEM, STRIKEITEM } from "../actions";

const initialState = {
  todos: [
    {
      value: "default item",
      completed: false,
      id: 0
    }
  ],
  user: [
    {
      name: "mike"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDITEM:
      let newArr = state.todos.slice();
      newArr.push({
        value: action.payload,
        completed: false,
        id: state.todos.length
      });
      return {
        ...state,
        todos: newArr
      };
    case STRIKEITEM:
      let strikeArr = state.todos.slice();
      strikeArr[action.payload].completed = !strikeArr[action.payload]
        .completed;
      return Object.assign({}, state, { todos: strikeArr });
    default:
      return state;
  }
};
