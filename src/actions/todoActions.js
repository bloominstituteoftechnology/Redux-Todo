import { ADD_TODO, FETCH_TODOS } from './types';

export const fetchTodos = () => {
    return {
        type: FETCH_TODOS
    }
}

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}
