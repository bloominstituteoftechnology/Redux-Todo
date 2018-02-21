export const ADD = "ADD";
export const COMPLETE = "COMPLETE";

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the centra Redux store. That
// is left to the reducer(s).

export const add = () => {
  return {
    type: ADD,
    payload: {
      value: "TESTING",
      complete: false,
    }
    };
};

export const complete = () => {
  return {
    type: COMPLETE,
    };
};