import { ADDTODO, REMOVETODO, CHECKTODO } from "../actions";

export default (todos = [], action) => {
  switch (action.type) {
    case ADDTODO:
      return;
    case REMOVETODO:
      return;
    case CHECKTODO:
      return;
    default:
      return todos;
  }
};
