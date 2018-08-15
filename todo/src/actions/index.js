import { store } from "../index";
// empty array containing our state
export let startingState = [
  { id: 0, value: "Break Bread", completed: false },
  { id: 1, value: "Break Dance", completed: true }
];

export const ADD_TO_TODOS_LIST = "ADD_TO_TODOS_LIST";
export const ADD_INITIAL_TODO_ITEMS = "ADD_INITIAL_TODO_ITEMS";

// export const submitHandler = event => {
//   event.target.preventDefault();
//   console.log("Submit Handler working", this.state.newTodo);
//   // return {
//   //   type: ADD_INITIAL_TODO_ITEMS,
//   //   payload: this.state.newTodo
//   // };
// };

export const addToTodosList = newTodo => event => {
  event.preventDefault();
  console.log("addToTodosList Working", store);
  return store.dispatch({
    type: ADD_TO_TODOS_LIST,
    payload: newTodo
  });
};
