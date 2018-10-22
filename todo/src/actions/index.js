export const ADD_ITEM = 'ADD_ITEM'

export const addItem = todo =>{
    return {
        type: ADD_ITEM,
        payload: {
            value: todo,
            completed: false
        }
    }
}
