export const CREATE_TODO = "CREATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const createTodo = todo => {
  return {
    type: CREATE_TODO,
    payload: {value: todo, completed: false}
  };
};

export const toggleTodo = todo => {
  return {
    type: TOGGLE_TODO,
    payload: {completed: !todo.completed}//I don't know?
  }
}