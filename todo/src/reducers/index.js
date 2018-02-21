import { } from "../actions";

export default (todos = [{key: 0, todo: '', completed: false}], action) => {
  console.log("Action: ", action);
  switch (action.type) {
    default:
      return todos;
  }
};