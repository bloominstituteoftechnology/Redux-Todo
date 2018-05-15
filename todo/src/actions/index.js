export const ADD_TASK = "ADD_TASK";
export const GET_TASKS = "GET_TASKS";
export const DELETE_TASK = "DELETE_TASK";

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const getTasks = () => {
    return {
        type: GET_TASKS,
        payload: []
    }
}

export const deleteTask = (task) => {
    return {
        type: DELETE_TASK,
        payload: task
    }
}
