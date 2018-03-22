export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const REMOVE = "REMOVE";



export const add = (text) => {
    return {
        type: ADD,
        text: text,
    }
}
export const toggle = (id) => {
    return {
        type: TOGGLE,
        id,
    }
}
export const remove = (id) => {
    return {
        type: REMOVE,
        id
    }
}
