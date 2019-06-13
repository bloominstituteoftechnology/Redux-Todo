

export const addTask = (newTask) => {
    return {
        type: "ADD_TASK",
        payload: newTask
    }
}