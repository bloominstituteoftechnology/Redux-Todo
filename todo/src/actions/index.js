export const ADD_TODO = 'ADD_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';
export const DELETE_TODO = 'DELETE_TODO';

// 1. The general flow of steps will be to create your store, 2. create your reducers, create your containers, and then create the action creators.

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const fetchTodos = () => {
    return {
        type: FETCH_TODOS,
        payload: []
    }
}

export const deleteTodo = (todo) => {
    return {
        type: DELETE_TODO,
        payload: todo
    }
}