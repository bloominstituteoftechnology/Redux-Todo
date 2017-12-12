export const NEW_TODO = 'NEW TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodo = (todo) => {
  return {
      type: NEW_TODO,
      payload: todo
  }
}

export const toggleComplete = (index) => {
  return {
    type: TOGGLE_COMPLETE, 
    payload: index
  }
}