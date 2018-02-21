import { ADD_TODO } from "../actions";

export default (todos = [{key: 0, todo:'', completed:false}], action) => {
  console.log("Action: ", action);
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];
    default:
      return todos;
  }
};