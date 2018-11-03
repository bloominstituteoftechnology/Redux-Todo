export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

export const addTaskAction = (task) =>{
    return {type: 'ADD_TASK', payload: task}
}

export const toggleCompletedAction = (id) =>{
    return{ type:'TOGGLE_COMPLETED', payload: id}
}
