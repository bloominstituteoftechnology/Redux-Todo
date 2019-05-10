export const ADD_TODO = 'ADD_TODO';

export const addTodo = (input) => {
    return {
        type: ADD_TODO,
        payload: input
    }
}