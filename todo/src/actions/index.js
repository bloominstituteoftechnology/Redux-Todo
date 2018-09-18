export const ADD_TODO = 'ADD_TODO'

export const add_todo = (task) => {
  return {
    type: ADD_TODO,
    text: task
  }
}
