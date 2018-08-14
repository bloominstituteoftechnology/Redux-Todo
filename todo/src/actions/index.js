export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodo = text => {
    return {
        type: ADD_TODO,
        payload: text
    };
};

export const toggleComplete = index => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    };
};