export const ADD = "ADD"
export const CLEAR = "CLEAR"
export const TOGGLE = "TOGGLE"

export const add = (text) => {
  return {
     type: ADD,
     text: text
  }
}
export const clear = (completed) => {
  return {
     type: CLEAR,
     completed: completed
  }
}

export const toggle = (id) => {
  return {
     type: TOGGLE,
     id: id
  }
} 