export const ADD_NEW_TODO = 'ADD_NEW_TODO';

export const addTodo = (todo) => {
    return {
        type: ADD_NEW_TODO,
        payload: todo
    }
}