const deleteTask = (taskID) => {
    return{
        type: 'DELETE_TASK',
        payload: taskID
    }
}

export default deleteTask