export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).


export const removeToDo = () => {
    return { type: REMOVE_TODO }
};



export const addToDo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const completeToDo = todoId => {
  return { type: COMPLETE_TODO, payload: todoId };
};