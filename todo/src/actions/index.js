export const NEW_TODO = 'NEW_TODO'; 
export const TOGGLE_COMPLETE = 'TOGGLE_PARENT';

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