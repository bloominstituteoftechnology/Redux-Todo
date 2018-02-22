import { ADD, COMPLETE } from "../actions";

export default (todo = [], action) => {
  switch (action.type) {
    case ADD:
      return todo.concat(action.payload);
    case COMPLETE:
      console.log(todo);
      let temp = todo;
      temp[action.target] = {
        value: todo[action.target].value,
        complete: true
      };
      return temp;
    default:
      return todo;
  }
};
