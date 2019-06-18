export const ADD = "ADD";
export const REMOVE = "REMOVE";

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const add = OBJ => {
  return { type: ADD, payload: { value: OBJ, remove: false } };
};

export const remove = OBJ => {
  return { type: REMOVE, payload: OBJ };
};
