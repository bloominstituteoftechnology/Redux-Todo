export const ADD = 'ADD';
export const DELETE = 'DELTE';
export const LINETHROUGH = 'LINETHROUGH';

export const addTodo = (todo) => {
    return {
        type: ADD,
        todo: {
            text: todo,
            completed: false
        },
    }
};
export const deleteTodo = (index) => {
    return {
        type: DELETE,
        index: index,
    }
};

export const LineThrough = (todo) => {
    return {
        type: LINETHROUGH,
        todo: {
            text: todo,
            completed: false
        },
    }
};