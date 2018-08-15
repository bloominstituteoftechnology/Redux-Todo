import {
  ADD_TO_TODOS_LIST,
  ADD_INITIAL_TODO_ITEMS,
  startingState
} from "../actions";

export default (todos = startingState, action) => {
  console.log("ACTION", action);
  console.log("STATE", todos);
  switch (action.type) {
    case ADD_TO_TODOS_LIST:
      // return [
      //   ...todos,
      //   {
      //     key: Date.now(),
      //     value: action.payload,
      //     completed: false
      //   }
      // ];
      return Object.assign(
        {},
        todos,
        todos.todos.push({
          id: Date.now(),
          value: action.payload,
          completed: false
        })
      );
    case ADD_INITIAL_TODO_ITEMS:
      return todos.push(action.payload);
    default:
      return { todos };
  }
};
