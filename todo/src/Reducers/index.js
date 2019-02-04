import { ADD_ITEM, CHECK_ITEM, REMOVE_ITEM } from "../Actions";

const initialState = {
  todos: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { todos: state.todos.concat(action.todo) };
    case CHECK_ITEM:
      return {
        todos: state.todos.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              complete: !item.complete
            };
          } else return item;
        })
      };
    case REMOVE_ITEM:
      return {
        todos: state.todos.filter(item => {
          return !item.complete;
        })
      };
    default:
      return state;
  }
}
