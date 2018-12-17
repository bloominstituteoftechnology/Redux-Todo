export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload: payload
    }
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id
    }
}

export const toggleTask = (id) => {
    return {
        type: TOGGLE_TASK,
        payload: id
    }
}