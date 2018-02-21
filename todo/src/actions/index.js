export const ADD_TODO = "ADD_TODO";
export const COMPLETED = "COMPLETED";

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the centra Redux store. That
// is left to the reducer(s).

export const add_todo = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};

export const completed = (state, index) => {
  const display = {
    state: state,
    index: index
  };
  return {
    type: "COMPLETED",
    payload: display
  };
};
