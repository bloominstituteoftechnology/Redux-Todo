export const ADD = "ADD";
export const TOGGLE = "TOGGLE";



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
