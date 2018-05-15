export const FETCH_TODOS = "FETCH_TODOS";

export const fetchTodos = () => {
  return {
    type: FETCH_TODOS,
    payload: ["Laundry", "Homework", "Exercise", "Dishes", "Shopping", "Walk dog"]
  };
};