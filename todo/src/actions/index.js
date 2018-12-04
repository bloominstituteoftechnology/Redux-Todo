export const ADD = "ADD";

export const add = text => {
    return {
        type: ADD,
        newTask: text
    }
};