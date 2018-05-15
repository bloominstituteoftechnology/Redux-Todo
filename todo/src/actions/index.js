export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const addTodo = (todo) => {
    // Fill in this function
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const completeTodo = (id) => {
    // Fill in this function
    return {
        type: COMPLETE_TODO,
        payload: id
    };
};

export const removeTodo = (id) => {
    // Fill in this function
    return {
        type: REMOVE_TODO,
        payload: id
    };
};