export const HELLO = 'HELLO';


// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const hello = () => {
  // Fill in this function
  return {type: HELLO, payload: 'hello'};
};

