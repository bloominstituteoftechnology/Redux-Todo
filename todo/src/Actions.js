export const NEWTODO = 'NEWTODO';
export const COMPLETED = 'COMPLETED';
export const DELETED = 'DELETED'

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const newTodo = todo => {
  // Fill in this function
  return { type: NEWTODO, payload: todo}
};

export const completed = (id) => {
  // Fill in this function
  return { type: COMPLETED,payload:id }
};
export const deleted = (id) => {
  // Fill in this function
  return { type: DELETED, payload: id }
};
