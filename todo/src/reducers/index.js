import { ADD_TO_TODOS_LIST, todos } from "../actions";

export default (state = todos, action) => {
  console.log("ACTION", action);
  switch (action.type) {
    case ADD_TO_TODOS_LIST:
      return "hey";
    default:
      return "default on TODOS list being triggerd";
  }
};
