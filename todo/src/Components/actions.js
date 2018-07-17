

export const addTodo = () => {
    return {
        type: 'ADD_TODO'
    };
};

export const toggleCompleted = () => {
    return {
        type: 'TOGGLE_COMPLETED'
    };
};

//The two major principles that are being carried out
//here are that of Functional Programming Actions as functions
//are the trigger for calling reducers, and reducers are pure 
//functions that never produce any side-effects. Everything you 
//do in Redux is functional.


// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).