export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const DELETE_COMPLETED = 'DELETE_COMPLETED'
export const DELETE_ITEM = 'DELETE_ITEM'

export const addTaskAction = (task) =>{
    return {type: 'ADD_TASK', payload: task}
}

export const toggleCompletedAction = (id) =>{
    return{ type:'TOGGLE_COMPLETED', payload: id}
}

export const deleteCompleted = () =>{
    return { type: 'DELETE_COMPLETED' }
}
export const deleteItem = (id) =>{
    return { type: 'DELETE_ITEM', payload: id}
}
