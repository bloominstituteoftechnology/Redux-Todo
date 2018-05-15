export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = () => {

    return {
        type: ADD_TODO,
        value: '',
        completed: false
    };
};

export const completeTodo = (todoID) => {

    return {
        type: COMPLETE_TODO,
        payload: todoID,
        completed: true
    };
};

export const deleteTodo = (todoID) => {

    return {
        type: DELETE_TODO,
        payload: todoID
    };
};
