export const ADD = 'ADD'
export const TOGGLE = 'TOGGLE'
export const REMOVE = 'REMOVE'

export const additem = item => {
    return {
        type: ADD,
        payload: item
    }
}
export const toggleitem = id => {
    return {
        type: TOGGLE,
        payload: id
    }
}
export const removeitem = item => {
    return {
        type: REMOVE,
        payload: item
    }
}