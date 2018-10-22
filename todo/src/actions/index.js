export const ADD_TASK = 'ADD_TASK';

export const addTask = newTask => {
    return { 
        type: ADD_TASK,
        payload: newTask 
    };
};