export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const DELETE_COMPLETED = 'DELETE_COMPLETED'
export const DELETE_ITEM = 'DELETE_ITEM'

export const add_todo = (text) => {
  return {
    type: ADD_TODO,
    text, 
    id: Date.now()
  }
}

export const toggle_completed = (id) => {
  return {
    type: TOGGLE_COMPLETED,
    id
  }
}

export const delete_completed = () => {
  return { type: DELETE_COMPLETED }
}

export const delete_item = (id) => {
  return { type: DELETE_ITEM, id}
}
