export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const MARKCOMPLETE = 'MARKCOMPLETE';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the centra Redux store. That
// is left to the reducer(s).
let nextTodoId = 0
export const add = (text) => ({
   // Fill in this function 
   type: 'ADD',
   id: nextTodoId++,
   text
});


export const remove = (id) => ({
   // Fill in this function 
   type: 'REMOVE',
   id
});

export const markComplete = (id) => ({
   // Fill in this function 
	type: 'MARKCOMPLETE',
   id
});