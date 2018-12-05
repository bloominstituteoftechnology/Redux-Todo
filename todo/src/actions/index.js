
export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addItem = task=> {
    console.log('in action', task)
    return {
        type: ADD_ITEM,
        payload: task
    }
}

export const toggleCompleted = task => {
    console.log('toggle')
    return {
        type: TOGGLE_COMPLETED,
        payload: task
    }
}