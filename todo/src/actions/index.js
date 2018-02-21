//Actions contain a Type and a Payload
//Type - the name of the action
//Payload - contains the value of the action

export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    payload: todo
  };
}

export const deleteTodo = todoId => {
  return {
    type: 'DELETE_TODO',
    payload: todoId
  };
}