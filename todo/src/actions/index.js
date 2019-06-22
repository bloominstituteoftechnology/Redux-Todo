import {ADD_TODO, TOGGLE_TODO} from './types';

export const addTodo = todo =>{
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}