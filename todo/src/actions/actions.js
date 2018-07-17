export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO= 'TOGGLE_TODO';

export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    payload: todo
};
}
export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    payload: id
};
}



{/*let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})*/}