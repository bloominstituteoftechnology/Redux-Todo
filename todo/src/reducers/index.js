import { } from "../actions";

export default (todos = [], action) => {
  console.log("Action: ", action);
  switch (action.type) {
    default:
      return todos;
  }
};