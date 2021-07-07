export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = newTodo => {
  console.log('in action: addTodo');
  return {
    type: ADD_TODO,
    payload: newTodo
  }

}

export const toggleComplete = (id) => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id
  }
}
