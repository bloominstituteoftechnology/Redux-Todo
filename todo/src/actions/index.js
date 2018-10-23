export const ADD_TASK = 'ADD_TASK'

export const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    }
}