export const ADD_TASK = "ADD_TASK"
export const CLEAR_COMPLETED_TASKS = "CLEAR_COMPLETED_TASKS"
export const TOGGLE_COMPLETION = "TOGGLE_COMPLETION"
export const HANDLE_CHANGE_EVENT = "HANDLE_CHANGE_EVENT"

export const addTask = (event, todo) => {
    event.preventDefault()
    return {
        type: ADD_TASK,
        payload: todo
    }
}

export const clearCompletedTasks = (clearCompletedTasksPayload) => {
    return {
        type: CLEAR_COMPLETED_TASKS,
        payload: clearCompletedTasksPayload
    }
}

export const toggleCompletion = (task, id, completed) => {
    console.log("testing testing")
    return {
        type: TOGGLE_COMPLETION,
        payload: completed, // ========
        task: task,
        id: id
    }
}

export const handleChangeEvent = (event) => {
    return {
        type: HANDLE_CHANGE_EVENT,
        payload: event.target.value
    }
}