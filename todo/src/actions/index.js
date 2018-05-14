export const CREATE_TODO = "CREATE_TODO";
export const TODO_LIST = "TODO_LIST"

export const createTodo = () => {
  return {
    type: CREATE_TODO,
    payload: [""],
  };
}

export const todoList = todo => {
  return {
    type: TODO_LIST,
    payload: todo
  };
}