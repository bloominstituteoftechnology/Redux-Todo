export const ADD_TASK = 'ADD_TASK';

export const addTask = (event, newTask) => {
    event.preventDefault();
    return {
        type: 'ADD_TASK',
        payload: newTask
    };
};