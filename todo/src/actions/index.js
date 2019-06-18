export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const PREPARE = "PREPARE";

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const add = (value, id) => {
  return {
    type: ADD,
    payload: { value: value, id: id }
  };
};

export const remove = id => {
  return { type: REMOVE, payload: id };
};
export const prepare = id => {
  return {
    type: PREPARE,
    payload: id
  };
};
