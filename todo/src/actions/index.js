export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";

export const fetchTodos = () => {
  return {
    type: FETCH_TODOS,
    payload: ["Laundry", "Homework", "Exercise", "Dishes", "Shopping", "Walk dog"]
  };
};


export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};





