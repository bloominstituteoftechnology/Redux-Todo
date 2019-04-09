//Action creator
export const ADD_TODO = "ADD_TODO";
//Named export
export const addTodo = todo => {
  console.log(todo);
  //Return an action
  return {
    type: "ADD_TODO",
    payload: todo
  };
};
