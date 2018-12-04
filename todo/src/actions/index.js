export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

export const addTask = (text, id) => {
    return {
        type: ADD_TASK,
        payload: [text, id]
    }
}

export const removeTask = (task) => {
    return {
        type: REMOVE_TASK,
        payload: task
    }
}

export const completeTask = (task) => {
    return {
        type: COMPLETE_TASK,
        payload: task
    }
}