export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

export const add_todo = (task) => {
  return {
    type: ADD_TODO,
    text: task
  }
}

export const toggle_completed = (id) => {
  return {
    type: TOGGLE_COMPLETED,
    id: 0
  }
}
