export const ADD_TODO = 'ADD'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

export const addTodo = userInput => {
  return {
    type: ADD_TODO,
    text: userInput
  }
}

export const toggleCompleted = index => {
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  }
}
