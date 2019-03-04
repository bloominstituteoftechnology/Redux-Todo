import { ADD_TODO } from './types';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}
