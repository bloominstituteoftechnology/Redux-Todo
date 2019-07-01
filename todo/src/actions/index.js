import { ADD_TODO, TOGGLE_TODO, DELETE_TODOS } from '../reducers';

export const addTodo = text => {
    return {
        type: ADD_TODO,
        payload: text,
    }
}

export const toggleTodo = index => {
    return {
        type: TOGGLE_TODO,
        payload: index,
    }
}

export const deleteTodos = () => {
    return {
        type: DELETE_TODOS,
    }
}