export const addTodo = todo => {
  console.log("in Action ", todo);
  return {
    type: "ADDTODO",
    payload: todo
  };
};


export const deleteTodo = index => {
  console.log("in Action deleteTodo ", index);
  return {
    type: "DELETETODO",
    payload: index,
  };
};



export const toggleCompleted = index => {
  console.log("in Action TOGGLECOMPLETED ", index);
  return {
    type: "TOGGLECOMPLETED",
    payload: index,
  };
};