export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const MARK_FINISHED = 'MARK_FINISHED';

let currentID = 0;
export const addTodo = (text) => {
    currentID++;
    return {
        type: ADD_TODO,
        entry: { id: currentID, value: text, completed: false},
    }
}

export const deleteTodo = () => {
    return {
        type: DELETE_TODO,
    };
}

export const markFinished = () => {
    return {
        type: MARK_FINISHED,
    };
}