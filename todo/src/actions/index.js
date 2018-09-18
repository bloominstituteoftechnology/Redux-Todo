export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

export const add_todo = (task) => {
  return {
    type: ADD_TODO,
    text: task,
    id: Date.now()
  }
}

export const toggle_completed = (id) => {
  return {
    type: TOGGLE_COMPLETED,
    id
  }
}
