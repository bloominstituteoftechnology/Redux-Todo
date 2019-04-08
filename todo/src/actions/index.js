export const addTask = (task) => {
    return {
        type:'ADD_TASK',
        payload: task
    }
},
deleteTask = (taskId) => {
    return {
        type:'DELETE_TASK',
        paydload: taskId
    };
};

export default {addTask, deleteTask};