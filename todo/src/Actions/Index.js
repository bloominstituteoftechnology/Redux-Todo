export const ADD = 'ADD';
export const DELETE = 'DELTE';

export const addTodo = (todo) => {
    return {
        type: Add,
        todo: {
            text: todo,
            completed: fasle
        },
    }
};
export const deleteTodo = (index) => {
    return {
        type: DELETE,
        index: index,
    }
};