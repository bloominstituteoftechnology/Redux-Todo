export const ADDTODO = "ADDTODO";
export const TOGGLETODO = "TOGGLETODO";
export const DELETETODO = "DELETETODO";

let nextTodoId = 0;

export const addTodo = text => ({
  type: "ADDTODO",
  id: nextTodoId++,
  text
});

export const toggleTodo = id => ({
  type: "TOGGLETODO",
  id
});

export const deleteTodo = () => ({
  type: "DELETETODO"
});
