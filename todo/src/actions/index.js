export const ADD_TODO = 'ADD_TODO';  
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'; 
// Action Types ^

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).


export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const toggleCompleted = (id) => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    };
};
// Action creators ^


//The two major principles that are being carried out
//here are that of Functional Programming Actions as functions
//are the trigger for calling reducers, and reducers are pure 
//functions that never produce any side-effects. Everything you 
//do in Redux is functional.
