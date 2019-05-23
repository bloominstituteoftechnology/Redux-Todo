export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const DELETETASK = "DELETETASK";
export const DELETEALL = "DELETEALL";

export const add = text => {
    return {
        type: ADD,
        data: text
    }
};

export const toggleCompleted = id => {
    return {
        type: TOGGLE,
        data: id
    }
}

export const deleteTask = id => {
    return {
        type: DELETETASK,
        data: id
    }
}

export const deleteAll = () => {
    return {
        type: DELETEALL
    }
}