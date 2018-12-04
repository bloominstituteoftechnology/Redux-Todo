export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const DELETE = "DELETE";

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
        type: DELETE,
        data: id
    }
}