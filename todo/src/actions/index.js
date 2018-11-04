//  Packets of information that contain action type
//  Send data from your application to your store. 
//  Gets triggered from human interaction
//  Functions that return plain JS objects
//  Dispatch under the hood

// Action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const toggleComplete = id => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

