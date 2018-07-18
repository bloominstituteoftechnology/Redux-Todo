export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo
  };
};

export const changeText = (event) => {
  return {
    type: 'INPUT_TEXT',
    payload: event.target.value
  };
};
// called onChange and the onChange is when you press a key to change the value on the text field

// export const deleteTodo = (id) => {
//   return {
//     type: 'DELETE_TODO',
//     payload: id
//   };
// };

// export const toggleTodo = (id) => {
//   return {
//     type: 'TOGGLE_TODO',
//     payload: id
//   };
// };
