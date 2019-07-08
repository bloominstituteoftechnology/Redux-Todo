export const ADD_TODO = "ADD_TODO"
export const addTodo = newTodo => {
  //console.log('FROM ACTIONS:', newTodo)
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}

export const TOGGLE_MEMBER = 'TOGGLE_MEMBER'
export const toggleMember = index => {
  console.log(index)
  return {
    type: index,
    payload: index
  }
}

