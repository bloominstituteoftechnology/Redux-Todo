export const ADD_TO_LIST = 'ADD TO LIST';
export const CHANGE_COMPLETED = 'CHANGE COMPLETED'

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const addToList = (text) => {
  return {
    type: ADD_TO_LIST,
    payload: text,
  }
};

export const changeCompletedAction = (id) => {
  return {
    type: CHANGE_COMPLETED,
    payload: id,
  }
};