// empty array containing our state
export let todos = ["Bake Lasagana", "Flip the script!", "Bake A Cake"];

export const ADD_TO_TODOS_LIST = "ADD_TO_TODOS_LIST";
export const ADD_INITIAL_TODO_ITEMS = "ADD_INITIAL_TODO_ITEMS";

// export const addToTodosList = event => {
//   event.preventDefault();
//   console.log("addToTodosList Working");
//   return {
//     type: ADD_TO_TODOS_LIST
//     // payload: decrement
//   };
// };

// export const submitHandler = event => {
//   event.target.preventDefault();
//   console.log("Submit Handler working", this.state.newTodo);
//   // return {
//   //   type: ADD_INITIAL_TODO_ITEMS,
//   //   payload: this.state.newTodo
//   // };
// };

export const addToTodosList = event => {
  event.preventDefault();
  console.log("addToTodosList Working");
  // return {
  //   type: ADD_TO_TODOS_LIST,
  //   payload: this.state.newTodo
  // };
};
