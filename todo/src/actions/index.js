export const ADD_TODO = 'ADD_TODO';

export const addTodo = newTodo => {
  console.log('in action: addTodo');
  return {
    type: ADD_TODO,
    payload: newTodo
  }

}
