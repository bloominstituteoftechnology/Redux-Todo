export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

let objid = 0;

export const addTodo = (value) => {
    objid += 1;
    return {
        type: ADD_TODO,
        payload: {
            id: objid,
            value: value,
            completed: false
        }
    };
};

export const deleteTodo = (i) => {
    return {
        type: DELETE_TODO,
        payload: {
            id: i,
        }
    };
};

export const completeTodo = () => {
    return {
        type: DELETE_TODO,
        payload: {}
    }
}