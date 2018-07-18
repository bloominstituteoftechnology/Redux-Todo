export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = todo => {
    // PACKET of information, which is an object with a description (type) and data (payload)
  return {
    type: ADD_TODO,
    payload: todo
};
}
export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
};
}