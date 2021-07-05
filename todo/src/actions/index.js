export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = newTask => {
    return { 
        type: ADD_TASK,
        payload: newTask 
    };
};

export const toggleCompleted = index => {
    return {
        type: TOGGLE_COMPLETED,
        payload: index
    };
};

export const deleteTask = index => {
    return {
        type: DELETE_TASK,
        payload: index
    };
};