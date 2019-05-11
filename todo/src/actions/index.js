const initialState = {todos: [{value: "Example Todo", completed: false}] };

export const addTodo = value => {
  return {
    type: 'ADD_TODO',
    payload: value
  }
}

export const fetchTodos = () => {
  return {
    type: 'FETCH_TODOS',
    payload: initialState
  }
}

export const toggleTodo = value => {
  return {
    type: 'TOGGLE_TODO',
    payload: value
  }
}