// let nextTodoId = 0;
// Starting at three to accomodate default list items
let nextTodoId = 3;

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
//
// export const setVisibilityFilter = filter => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }
//
// export const toggleTodo = id => {
//   return {
//     type: 'TOGGLE_TODO',
//     id
//   }
// }
