export const ADD_TASK = 'ADD_TASK';


const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    };
};

export default addTask;