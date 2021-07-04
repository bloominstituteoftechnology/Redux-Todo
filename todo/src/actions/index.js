export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';



export const addTodo = (todo) => {
  // Fill in this function
  return {
    type: ADD_TODO,
    payload: todo
  }
};

export const toggleComplete = (index) => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    }
}

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        payload: index
    }
}

// export const decrement = () => {
//   // Fill in this function
//   return {
//     type: DECREMENT
//   }
// };