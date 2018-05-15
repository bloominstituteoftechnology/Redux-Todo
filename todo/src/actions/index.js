export const ADD_TODO = 'ADD_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';

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