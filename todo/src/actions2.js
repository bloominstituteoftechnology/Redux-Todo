 const DeleteTask = (taskId) => {
    return{
        type: 'DELETE_TASK',
        payload: taskId
    }
}

export default DeleteTask; 