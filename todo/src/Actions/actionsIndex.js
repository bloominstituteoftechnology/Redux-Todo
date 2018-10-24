export const ADD_TASK = "ADD_TASK"
export const CLEAR_COMPLETED_TASKS = "CLEAR_COMPLETED_TASKS"
export const TOGGLE_COMPLETION = "TOGGLE_COMPLETION"
export const HANDLE_CHANGE_EVENT = "HANDLE_CHANGE_EVENT"

export const addTask = todo => {
    return {
        type: ADD_TASK,
        payload: {
            task: todo,
            completed: false
        }
    }
}

export const toggleCompletion = index => {
    console.log("testing testing")
    return {
        type: TOGGLE_COMPLETION,
        payload: index
    }
}

// export const clearCompletedTasks = (id) => {
//     return {
//         type: CLEAR_COMPLETED_TASKS,
//         payload: id
//     }
// }