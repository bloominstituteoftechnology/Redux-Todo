export const ADD_TODO = 'ADD_TODO';
export const HANDLE_INPUT = 'HANDLE_INPUT';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';




export const addTodo = (event, todo) => {
  event.preventDefault();
  return {
    type: ADD_TODO,
    payload: todo,
  }
}

export const handleInput = event => {
  return {
    type: HANDLE_INPUT,
    payload: event.target.value
  }
}

export const toggleComplete = (value, completed, id) => {
  return {
    type: TOGGLE_COMPLETE,
    payload: completed,
    value: value,
    id: id
  }
}

export const deleteTodo = (event, id) => {
  event.stopPropagation(); 
  return {
    type: DELETE_TODO,
    payload: id,
  }
}
