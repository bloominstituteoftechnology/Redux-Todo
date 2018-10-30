export const ADD_TODO = 'ADD_TODO'; // create
export const TOGGLE_TODO = 'TOGGLE_TODO'; 
export const REMOVE_TODOS = 'REMOVE_TODOS'; // delete
export const GET_TODOS = 'GET_TODOS'; //read/fetch

export const addTodo = todo => ({
  type: 'ADD_TODO',
  payload: todo
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: id
})

export const removeTodos = () => ({
  type: 'REMOVE_TODOS'
})

export const getTodos = todos => ({
  type: 'TOGGLE_TODO',
  payload: todos
})