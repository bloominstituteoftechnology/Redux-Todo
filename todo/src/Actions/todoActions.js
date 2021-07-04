export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const TOGGLE = "TOGGLE";

export const add = () => {
    return {
        type: ADD,
        payload:todo
    };
}

export const remove = () => {
    return {
        type: REMOVE,
        payload: id
    };
}

export const toggle = () => {
    return {
        type: TOGGLE,
        payload: id
    };
}