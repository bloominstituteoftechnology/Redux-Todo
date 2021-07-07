export const ADD_ITEM = 'ADD_ITEM'
export const CHECK_BOX = 'CHECK_BOX'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

export const addItem = todo =>{
    return {
        type: ADD_ITEM,
        payload: {
            value: todo,
            completed: false
        }
    }
}

export const checkBox = todo =>{
    return {
        type: CHECK_BOX,
        payload: {
            value: todo,
            completed: true
        }
    }
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    }
}