export const inputChange = input => {
  return {
    type: "INPUT_CHANGE",
    payload: input
  }
}

export const addTodo = () => {
  return {
    type: "ADD_TODO"
  }
}

export const completedToDo = id => {
  return {
    type: "TODO_COMPLETED",
    payload: id
  }
}