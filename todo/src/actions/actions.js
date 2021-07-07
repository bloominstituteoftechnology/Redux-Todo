export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';


export const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    };
};

export const toggleComplete = (index) => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    };
};

