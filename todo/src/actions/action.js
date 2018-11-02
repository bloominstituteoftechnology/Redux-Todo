export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE = "COMPLETE"
export const ADD_TODO = "ADD_TODO";

export const addTodo = todo => {
  return { type: "ADD_TODO", payload: todo };
};

export const deleteTodo = () => {
  return { type: "DELETE_TODO" };
};

export const completeTodo = id => {
    return {type: 'COMPLETE', payload: id}
}